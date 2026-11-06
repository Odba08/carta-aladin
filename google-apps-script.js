/**
 * ==============================================================================
 * CÓDIGO DE GOOGLE APPS SCRIPT PARA LA INVITACIÓN DE 15 AÑOS DE YAISRELIS ISABELLA
 * Hoja vinculada: https://docs.google.com/spreadsheets/d/1d3uSHlVQtv1E1HeQTXANpKzpuDNG13Qb6c7rRu8lYZE/edit
 * ==============================================================================
 * 
 * INSTRUCCIONES DE INSTALACIÓN (SÓLO TOMA 1 MINUTO):
 * 1. Abre tu hoja de Google Sheets.
 * 2. En el menú superior, haz clic en: Extensiones > Apps Script.
 * 3. Borra cualquier código que aparezca en el editor (como myFunction) y pega TODO este código.
 * 4. Haz clic en el ícono de Guardar (el disquete).
 * 5. Haz clic en el botón azul superior: "Implementar" (o "Deploy") > "Nueva implementación" (New deployment).
 * 6. En el engranaje "Seleccionar tipo", elige: "Aplicación web" (Web app).
 * 7. Configura estos campos:
 *    - Descripción: "RSVP 15 Años Yaisrelis"
 *    - Ejecutar como: "Yo" (tu cuenta de Google)
 *    - Quién tiene acceso: "Cualquier persona" (Anyone) -> ¡MUY IMPORTANTE para que los invitados puedan confirmar!
 * 8. Haz clic en "Implementar" (Deploy). Acepta los permisos de tu cuenta de Google.
 * 9. Copia la "URL de la aplicación web" (termina en /exec) y pégala en la invitación web o configúrala.
 * ==============================================================================
 */

const SHEET_ID = "1d3uSHlVQtv1E1HeQTXANpKzpuDNG13Qb6c7rRu8lYZE";

function doGet(e) {
  // Manejo de peticiones GET (para pruebas o lectura de datos)
  if (e && e.parameter && e.parameter.action === "ping") {
    return respondJSON({ status: "ok", message: "Servicio Apps Script activo y listo." });
  }
  
  // Si envían datos por GET (fallback para evitar restricciones CORS en algunos navegadores)
  if (e && e.parameter && (e.parameter.titular || e.parameter.action === "rsvp")) {
    return procesarConfirmacion(e.parameter);
  }

  return respondJSON({
    status: "online",
    sheetId: SHEET_ID,
    message: "Apps Script de Confirmación de Asistencia - 15 Años Yaisrelis Isabella"
  });
}

function doPost(e) {
  try {
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    return procesarConfirmacion(data);
  } catch (error) {
    return respondJSON({
      status: "error",
      message: error.toString()
    });
  }
}

function procesarConfirmacion(data) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheets()[0]; // Primera hoja
  
  const titular = (data.titular || "").trim();
  const nro = data.nro ? parseInt(data.nro, 10) : null;
  const acompanantes = (data.acompanantes || "").trim();
  const pases = data.pases ? parseInt(data.pases, 10) : 1;
  const telefono = (data.telefono || "").trim();
  const estado = data.estado === "No asiste" ? "No asiste" : "Confirmado";
  const observaciones = (data.observaciones || "").trim();

  if (!titular) {
    return respondJSON({
      status: "error",
      message: "El nombre del titular es requerido."
    });
  }

  const lastRow = sheet.getLastRow();
  let foundRow = -1;
  let maxNro = 0;

  // Recorrer filas existentes (los datos inician a partir de la fila 4)
  if (lastRow >= 4) {
    const rangeData = sheet.getRange(4, 2, lastRow - 3, 7).getValues();
    // Columnas del rango (1 a 7 relativas):
    // Col 0: Nº (Columna B)
    // Col 1: Invitado / Titular (Columna C)
    // Col 2: Acompañantes / Familia (Columna D)
    // Col 3: Pases (Columna E)
    // Col 4: Teléfono / Contacto (Columna F)
    // Col 5: Estado (Columna G)
    // Col 6: Mesa / Observaciones (Columna H)

    for (let i = 0; i < rangeData.length; i++) {
      const rowNro = parseInt(rangeData[i][0], 10);
      if (!isNaN(rowNro) && rowNro > maxNro) {
        maxNro = rowNro;
      }

      const rowTitular = (rangeData[i][1] || "").toString().trim().toLowerCase();
      
      // Coincidencia por Nº si se envió
      if (nro && rowNro === nro) {
        foundRow = 4 + i;
        break;
      }

      // Coincidencia por Nombre del Titular (insensible a mayúsculas y acentos aproximados)
      if (rowTitular && normalizarTexto(rowTitular) === normalizarTexto(titular.toLowerCase())) {
        foundRow = 4 + i;
        break;
      }
    }
  }

  if (foundRow > 0) {
    // ACTUALIZAR INVITADO EXISTENTE
    // Columna F: Teléfono (si vino vacío en la hoja o si el invitado aportó uno nuevo)
    if (telefono) {
      sheet.getRange(foundRow, 6).setValue(telefono);
    }
    // Columna G: Estado ("Confirmado" o "No asiste")
    sheet.getRange(foundRow, 7).setValue(estado);

    // Columna H: Observaciones (conservar existentes si hay, y agregar la nota)
    if (observaciones) {
      const currentObs = sheet.getRange(foundRow, 8).getValue();
      const nuevaObs = currentObs ? (currentObs + " | " + observaciones) : observaciones;
      sheet.getRange(foundRow, 8).setValue(nuevaObs);
    }

    // Si confirmaron pases y difiere o no tenía, se puede ajustar o conservar
    return respondJSON({
      status: "success",
      action: "updated",
      row: foundRow,
      titular: titular,
      estado: estado,
      message: `¡Gracias ${titular}! Tu respuesta (${estado}) ha sido registrada con éxito.`
    });

  } else {
    // AGREGAR NUEVO INVITADO AL FINAL DE LA LISTA
    const nextNro = maxNro + 1;
    const newRowIndex = Math.max(lastRow + 1, 4);

    sheet.getRange(newRowIndex, 2).setValue(nextNro);             // Col B: Nº
    sheet.getRange(newRowIndex, 3).setValue(titular);             // Col C: Invitado / Titular
    sheet.getRange(newRowIndex, 4).setValue(acompanantes || "-"); // Col D: Acompañantes
    sheet.getRange(newRowIndex, 5).setValue(pases);               // Col E: Pases
    sheet.getRange(newRowIndex, 6).setValue(telefono);            // Col F: Teléfono
    sheet.getRange(newRowIndex, 7).setValue(estado);              // Col G: Estado
    sheet.getRange(newRowIndex, 8).setValue(observaciones);       // Col H: Mesa / Observaciones

    return respondJSON({
      status: "success",
      action: "inserted",
      row: newRowIndex,
      nro: nextNro,
      titular: titular,
      estado: estado,
      message: `¡Bienvenido ${titular}! Has sido agregado a la lista y tu confirmación (${estado}) ha sido guardada.`
    });
  }
}

function normalizarTexto(txt) {
  return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function respondJSON(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

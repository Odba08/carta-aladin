/**
 * ==============================================================================
 * CÓDIGO DE GOOGLE APPS SCRIPT PARA LA INVITACIÓN DE 15 AÑOS DE YAISRELIS ISABELLA
 * Hoja vinculada: https://docs.google.com/spreadsheets/d/1d3uSHlVQtv1E1HeQTXANpKzpuDNG13Qb6c7rRu8lYZE/edit
 * ==============================================================================
 */

const SHEET_ID = "1d3uSHlVQtv1E1HeQTXANpKzpuDNG13Qb6c7rRu8lYZE";
const SHEET_TAB_NAME = "Invitados XV"; // Nombre exacto de tu pestaña

function doGet(e) {
  if (e && e.parameter && e.parameter.action === "ping") {
    return respondJSON({ status: "ok", message: "Servicio Apps Script activo y listo." });
  }
  
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
  const sheet = ss.getSheetByName(SHEET_TAB_NAME) || ss.getSheets()[0];
  
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

  // En tu hoja los datos inician en la fila 8 (Fila 7 es el encabezado Nº, Titular...)
  const startRow = 8;

  if (lastRow >= startRow) {
    const rangeData = sheet.getRange(startRow, 2, lastRow - startRow + 1, 7).getValues();
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
      
      // Coincidencia por Nº si fue enviado
      if (nro && rowNro === nro) {
        foundRow = startRow + i;
        break;
      }

      // Coincidencia por Nombre del Titular
      if (rowTitular && normalizarTexto(rowTitular) === normalizarTexto(titular.toLowerCase())) {
        foundRow = startRow + i;
        break;
      }
    }
  }

  if (foundRow > 0) {
    // ACTUALIZAR INVITADO EXISTENTE
    // Columna F (Columna 6): Teléfono
    if (telefono) {
      sheet.getRange(foundRow, 6).setValue(telefono);
    }
    // Columna G (Columna 7): Estado ("Confirmado" o "No asiste")
    sheet.getRange(foundRow, 7).setValue(estado);

    // Columna H (Columna 8): Observaciones
    if (observaciones) {
      const currentObs = sheet.getRange(foundRow, 8).getValue();
      const nuevaObs = currentObs ? (currentObs + " | " + observaciones) : observaciones;
      sheet.getRange(foundRow, 8).setValue(nuevaObs);
    }

    return respondJSON({
      status: "success",
      action: "updated",
      row: foundRow,
      titular: titular,
      estado: estado,
      message: `¡Gracias ${titular}! Tu respuesta (${estado}) ha sido registrada con éxito en tu fila de la lista.`
    });

  } else {
    // AGREGAR NUEVO INVITADO AL FINAL DE LA LISTA
    const nextNro = maxNro + 1;
    const newRowIndex = Math.max(lastRow + 1, startRow);

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

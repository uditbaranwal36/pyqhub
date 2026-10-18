function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  var name = (data.name || '').toString().trim();

  if (!name) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'No name provided' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([new Date(), name]);

  var lastRow = sheet.getLastRow();
  // Header row (1) doesn't count toward the total.
  var total = lastRow - 1;

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', total: total })
  ).setMimeType(ContentService.MimeType.JSON);
}

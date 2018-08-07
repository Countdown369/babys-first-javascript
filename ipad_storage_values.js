function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++) {
    if (data[i][7] < 16)
    {
      sheet.appendRow(['16 GB']);
    }
    else if (data[i][7] < 32)
    {
      sheet.appendRow(['32 GB']);
    }
    else if (data[i][7] < 64)
    {
      sheet.appendRow(['64 GB']);
    }
    else if (data[i][7] < 128)
    {
      sheet.appendRow(['128 GB']);
    }
    else if (data[i][7] < 256)
    {
      sheet.appendRow(['256 GB']);
    }
    else if (data[i][7] < 512)
    {
      sheet.appendRow(['512 GB']);
    }
    else if (data[i][7] < 1024)
    {
      sheet.appendRow(['1 TB']);
    }
    else
    {
      sheet.appendRow(['ERROR']);
    }
  }
}
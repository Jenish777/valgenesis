export const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>SpreadJS Integration</title>
  <script src="https://cdn.grapecity.com/spreadjs/latest/gc.spread.sheets.all.min.js"></script>
  <link href="https://cdn.grapecity.com/spreadjs/latest/gc.spread.sheets.excel2013white.css" rel="stylesheet" />
</head>
<body>
  <div id="ss" style="width:100%;height:500px;"></div>
  <script>
    const spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'), { sheetCount: 1 });
  </script>
</body>
</html>
`;
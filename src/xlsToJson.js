const XLSX = require("xlsx");
const fs = require("fs");
const rs = require("./utils");

module.exports = {
  async excelTOjson() {
    try {
      const wb = XLSX.readFile("./XLSexample.xlsx");
      const ws = wb.Sheets["Sheet1"];
      const excel = XLSX.utils.sheet_to_json(ws);

      let jsonArchive = fs.readFileSync("./JSONexample.json");
      jsonArchive = JSON.parse(jsonArchive);

      for (value of excel) {
        let count = 0;
        for (value2 of jsonArchive.Server[0].ConfigSymbols) {
          if (value2.Symbol == value.Symbol) {
            console.log("");
            console.table(
              "old JSON swapShort -> " +
                JSON.stringify(value2.Symbol) +
                " : " +
                JSON.stringify(value2.SwapShort)
            );
            const newValue = rs.removeSpace(value);
            jsonArchive.Server[0].ConfigSymbols[count].SwapShort =
              newValue.Swapshort;
            [2];
            console.table(
              "new JSON swapShort altered -> " +
                JSON.stringify(
                  jsonArchive.Server[0].ConfigSymbols[count].Symbol
                ) +
                " : " +
                JSON.stringify(
                  jsonArchive.Server[0].ConfigSymbols[count].SwapShort
                )
            );
            console.log("");
          }
          count += 1;
        }
      }
    } catch (e) {
      throw e;
    }
  },
};

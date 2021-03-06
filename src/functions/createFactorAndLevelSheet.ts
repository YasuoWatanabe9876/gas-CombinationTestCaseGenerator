export const createFactorAndLevelSheet = (): void => {
  Logger.log("createFactorAndLevelSheet start");
  const configSheetName = "Factor&Level";
  let configSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    configSheetName
  );
  if (!configSheet) {
    configSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
    configSheet.setName(configSheetName);

    // Set header
    let range = configSheet.getRange("A1:D1");
    range.setBackground("yellow");

    // Set examples
    const headers: string[] = [];
    headers.push("Brand (Factor)");
    headers.push("OS (Factor)");
    headers.push("Network (Factor)");
    headers.push("Work style (Factor)");
    range.setValues([headers]);

    range = configSheet.getRange("A2:D5");
    const values: string[][] = [
      ["Brand X", "98", "Internal", "Salaried"],
      ["Brand Y", "NT", "Modem", "Hourly"],
      ["", "2000", "", "Part-Time"],
      ["", "XP", "", "Contr."]
    ];
    range.setValues(values);
  }
  Logger.log("createFactorAndLevelSheet end");
};

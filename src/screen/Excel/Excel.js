import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const Excel = () => {
  const apiData = [
    { index: 1, name: "trung" },
    { index: 2, name: "Linh" },
    { index: 3, name: "Dumbo" },
  ];
  const fileName = "OTC";

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button onClick={(e) => exportToCSV(apiData, fileName)}>Export</button>
  );
};

export default Excel;

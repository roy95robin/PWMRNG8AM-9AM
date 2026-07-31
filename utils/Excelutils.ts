
import xlsx from 'xlsx'

export class ExcelUtils {

    // which excel file - filepath
    // which sheet from the excel 
    // filepath, sheet

static getExcelData(filepath:string, sheetname:string){

        try{
            // readfile is used to read data from file, will return the data in webbook formet
            // webbook formet is in sheetname and value formet
            const wb = xlsx.readFile(filepath)
            const sheet = wb.Sheets[sheetname]
            const data = xlsx.utils.sheet_to_json(sheet)
            return data

        }

        catch(error){
            console.log(error);
        }

}

}

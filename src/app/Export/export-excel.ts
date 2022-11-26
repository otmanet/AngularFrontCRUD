import { Injectable } from '@angular/core';
import * as Excel from "exceljs"
import * as fs from 'file-saver';


@Injectable({
    providedIn: 'root',
})
export class ExportExcel {

    constructor() { }
    ExportPersone(data: any, title?: string) {
        var dataForExcel: Object[] = [];
        data.forEach((elt: any) => {
            const tmp = [elt.id, elt.firstname, elt.lastname, elt.birthday, elt.city];
            dataForExcel.push(tmp);
        });
        // if (vehicule) Title = 'Rapport Parking -[' + vehicule + ']';
        let reportData = {
            title: title,
            data: dataForExcel,
            headers: ['ID', 'FIRSTNAME', 'LASTNAME', 'BIRTHDAY',
                'CITY'],
        };
        this.exportExcel(reportData);
    }
    exportExcel(excelData: { title: any; data: any; headers: any; }) {
        const title = excelData.title;
        const header = excelData.headers;
        const data = excelData.data;

        let workbook = new Excel.Workbook();
        let worksheet = workbook.addWorksheet('RAPPORT');


        let headerRow = worksheet.addRow(header);
        headerRow.eachCell((cell) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: '4167B8' },
                bgColor: { argb: '' }

            }
            cell.font = {
                bold: true,
                color: { argb: 'FFFFFF' },
                size: 12
            }
        })

        data.forEach((elt: any) => {
            worksheet.addRow(elt);
        });


        let footerRow = worksheet.addRow([' Details: ' + Date()]);
        footerRow.getCell(1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '4167B8' }
        };
        footerRow.getCell(1).font = {
            bold: true,
            color: { argb: 'FFFFFF' },
            size: 12
        };

        worksheet.mergeCells(`A${footerRow.number}:E${footerRow.number}`)

        //saving and exporting the excel file
        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fs.saveAs(blob, title + '.xlsx');
        })


    }
}

import jsPDF from "jspdf";
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ExportingTool {
    constructor() { }
    picture = 'assets/12g.png';
    adress1 = 'Otmanetahri1@gmail.com';
    add = '+212671707011';
    exportPdf_Persone(data: any, title: string) {
        const doc = new jsPDF();
        const rows: any = [];
        data.forEach((elt: any) => {
            const tmp = [elt.id, elt.firstname, elt.lastname, elt.birthday, elt.city];
            rows.push(tmp);
        });
        doc.setFontSize(14);
        doc.setDrawColor('blue');
        doc.addImage(this.picture, 'png', 10, 4, 30, 30);
        doc.setFontSize(12);
        doc.setTextColor('#033A7A');
        doc.text('otmanetahri.ga', 10, 32);
        doc.setFontSize(10);
        doc.text(this.adress1, 130, 17);
        doc.text(this.add, 130, 21)
        doc.setFontSize(18);
        doc.setTextColor('#366DAD');
        // Title = "Rapport Parking [" + vehicule + "]";
        doc.text(title, 150, 50, { align: 'center' });
        // doc.text(Title, 70, 50);
        (doc as any).autoTable({
            columns: [
                { dataKey: 'ID', header: 'ID' },
                { dataKey: 'FIRSTNAME', header: 'FIRSTNAME' },
                { dataKey: 'LASTNAME', header: 'LASTNAME' },
                { dataKey: 'BIRTHDAY', header: 'BIRTHDAY' },
                { dataKey: 'CITY', header: 'CITY' },

            ],
            body: rows,
            theme: 'grid',
            rowPageBreak: 'auto',
            //specifies where to start drowing the table
            startY: 60,
            showHead: 'firstPage',
            headStyles: { fillColor: [5, 97, 203] },
            columnStyles: { text: { cellWidth: 'wrap' } },
        });
        doc.setFontSize(10);
        this.addFooters(doc)
        doc.save(title);
    }
    addFooters = (doc: any) => {
        const pageCount = doc.internal.getNumberOfPages()
        doc.setFont('helvetica', 'italic')
        doc.setTextColor('black');
        doc.setFontSize(8)
        var height = doc.internal.pageSize.height - 10
        var width = doc.internal.pageSize.width - 10
        for (var i = 1; i <= pageCount; i++) {
            doc.setPage(i)
            doc.text(new Date().toLocaleString(), 20, height, {
                align: 'left'
            })
            doc.text('Page ' + String(i) + ' de ' + String(pageCount), width - 10, height, {
                align: 'right'
            })
        }
    }
}

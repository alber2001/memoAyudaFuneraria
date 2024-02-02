import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { fondo } from './files/fondo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ordenDePago';

  generatePDF() {
    const documentDefinition = {
      pageMargins: [85.05, 40, 85.05, 40],
      pageSize: 'letter', // Establecer el tamaño de la página como "carta"
      background: [
        {
          image: fondo,
          width: 612,
          height: 792,
        },
      ],
      content: [
        { text: 'MEMO-NO587-2023-RSPS-IHSS', style: 'header' },
        { text: 'PARA:    	   LIC. EDWIN ORLANDO MEDINA', style: 'destinatario' },
        { text: '', style: 'espacio' },
        { text: 'GERENCIA ADMINISTRATIVA Y FINANCIERA', style: 'normal' },
        { text: '', style: 'espacio' },
        { text: 'DE:		        ABOG. VICTOR MARTÍNEZ', style: 'remitente' },
        { text: '', style: 'espacio' },
        { text: 'GERENTE REGIMEN DEL SEGURO DE PREVISIÓN SOCIAL', style: 'normal' },
        { text: '', style: 'espacio' },
        { text: 'ASUNTO: 	REMISIÓN DE ORDEN DE PAGO PARA AYUDA FUNERAL', style: 'remitente' },
        { text: '', style: 'espacio' },
        { text: '', style: 'espacio' },
        { text: '', style: 'espacio' },
        { text: 'Por medio de la presente remito documentación de Gastos Funerales, para que se emita cheque a favor de YENSI DAYANA NUÑEZ SIERRA con número de identidad 0801-1991-12257 Quien hizo los Gastos de JELBER AICR NUÑES SIERRA (fallecido (a)) por la cantidad de QUINCE MIL SEISCIENTOS CUATRO  LEMPIRAS CON 40/100 (Lps.15,604.40).O/P 587', style: 'principal' },
        
      ],
      styles: {
        header: {
          fontSize: 12,
          bold: true,
          alignment: 'center',
          margin: [0, 100, 0, 0],
          
        },
        destinatario: {
          fontSize: 12,
          bold: true,
          alignment: 'left',
          margin: [45, 40, 0, 0],
        },
        normal: {
          fontSize: 12,
          bold: false,
          alignment: 'left',
          margin: [110, 0, 0, 0],
        },
        remitente: {
          fontSize: 12,
          bold: true,
          alignment: 'left',
          margin: [45, 0, 0, 0],
        },
        espacio: {          
          margin: [0, 0, 0, 10],
        },
        principal: {          
          margin: [0, 0, 0, 10],
           
        },
      },
    };

    pdfMake.createPdf(documentDefinition).open();
  }
}

import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from '../assets/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { fonts } from './config/pdfFonts';
import { styles, defaultStyle } from './config/customStyle';

pdfMake.fonts = fonts;
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
      pageSize: 'A4', // Establecer el tamaño de la página como "carta" letter
      background: [
        {
          image: fondo,
          // width: 612, tamaño carta
          // height: 792,
          width: 595, // Ancho de la hoja A4 en puntos
          height: 842, // Alto de la hoja A4 en puntos
        },
      ],
      content: [                            
        { text: 'MEMO-NO587-2023-RSPS-IHSS', style: 'header' },
        { text: 'PARA            LIC. EDWIN ORLANDO MEDINA', style: 'destinatario' },
        { text: '', style: 'espacio' },
        { text: '              GERENCIA ADMINISTRATIVA Y FINANCIERA', style: 'gerencia' },
        { text: '', style: 'espacio' },
        { text: 'DE:		        ABOG. VICTOR MARTÍNEZ', style: 'remitente' },
        { text: '', style: 'espacio' },
        { text: 'GERENTE RÉGIMEN DEL SEGURO DE PREVISIÓN SOCIAL', style: 'gerencia' },
        { text: '', style: 'espacio' },
        { text: 'ASUNTO: 	REMISIÓN DE ORDEN DE PAGO PARA AYUDA FUNERAL', style: 'remitente' },
        { text: '', style: 'espacio' },
        { text: '', style: 'espacio' },
        { text: '', style: 'espacio' },    
        {
          text: [
            { text: 'Por medio de la presente remito documentación de Gastos Funerales, para que se emita cheque a favor de'},
            { text: ' YENSI DAYANA NUÑEZ SIERRA', style: 'negrita' },
            { text: ' con número de identidad'},
            { text: ' 0801-1991-12257', style: 'negrita' },
            { text: ' Quien hizo los Gastos de'},
            { text: ' JELBER AICR NUÑEZ SIERRA (fallecido (a))', style: 'negrita' },
            { text: ' por la cantidad de'},
            { text: ' QUINCE MIL SEISCIENTOS CUATRO LEMPIRAS CON 40/100 (Lps.15,604.40).'},
            { text: ' O/P 587'}
        ],        
        style: 'principal'
        },
        { text: '', style: 'espacio' },
        { text: '', style: 'espacio' },
        { text: '', style: 'espacio' },                   
        { text: 'Atentamente', style: 'normal' },
        { text: '', style: 'espacio' },
        { text: '', style: 'espacio' },
        { text: '', style: 'espacio' },
        { text: '', style: 'espacio' },        
        { text: '', style: 'espacio' },        
        { text: 'CC: Archivo', style: 'parchivo' },
      ],
      styles, 
      defaultStyle      
    };
    pdfMake.createPdf(documentDefinition).open();
  }
}

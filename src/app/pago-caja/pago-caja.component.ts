import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from '../../assets/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { fonts } from '../config/pdfFonts';
import { styles, defaultStyle } from '../config/cajaStyle';

pdfMake.fonts = fonts;
import { fondo } from '../files/fondo';

import { Beneficiario } from '../model/beneficiario.model';
import { BeneficiarioService } from '../services/beneficiario.service';

@Component({
  selector: 'app-pago-caja',
  templateUrl: './pago-caja.component.html',
  styleUrls: ['./pago-caja.component.css'],
})
export class PagoCajaComponent implements OnInit {
  beneficiarios: Beneficiario[] = [];

  constructor(private beneficiarioService: BeneficiarioService) {}

  ngOnInit() {
    //this.obtenerBeneficiarios();
  }

  generarPagoCajaPDF() {
    const documentDefinition = {
      pageMargins: [85.05, 40, 85.05, 40],
      pageSize: 'letter', // Establecer el tamaño de la página como "carta" letter
      background: [
        {
          image: fondo,
          width: 612,
          height: 792,
        },
      ],
      content: this.generateContent(),
      styles,
      defaultStyle,
    };
    pdfMake.createPdf(documentDefinition).open();
  }

  generateContent(): any[] {
    const content = [];
    content.push(
      {
        text: [
          { text: 'INSTITUTO HONDUREÑO DE SEGURIDAD SOCIAL \n' },
          { text: 'GERENCIA DEL RÉGIMEN DEL SEGURO DE PREVISIÓN SOCIAL \n' },
          { text: 'SUB-GERENCIA DE PENSIONES' },
        ],
        style: 'header1',
      },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      {
        text: [
          { text: 'Tegucigalpa 05 DE JULIO DEL 2024 \n', style: 'normal' },
          { text: 'La caja del IHSS pagara a: ', style: 'normal' },
          { text: 'ANA ISABEL LANDA ZEPEDA \n', style: 'normalBold' },
          { text: 'La suma de: ', style: 'normal' },
          {
            text: 'QUINCE MIL SEISCIENTOS CUATRO LEMPIRAS 40/100 \n',
            style: 'normalBold',
          },
          { text: 'por los siguientes conceptos: ', style: 'normal' },
          { text: 'Ayuda de Gastos Funebres ', style: 'normalBold' },
        ],
      },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      {
        table: {
          headerRows: 1,
          widths: ['*', 250, '*', '*'],
          body: [
            [
              { text: 'PARTIDA', style: 'normalBold' },
              { text: 'CONCEPTO', style: 'normalBold' },
              { text: 'PARCIAL', style: 'normalBold' },
              { text: 'TOTAL', style: 'normalBold' },
            ],
            [
              { text: '46101-01', style: 'normalBold' },
              {
                text: [
                  {
                    text: 'Largo Plazo \n \n \n \n',
                    style: 'normal',
                  },
                  {
                    text: 'Tegucigalpa \n',
                    style: 'normal',
                  },
                  {
                    text: 'Valor que se paga al solicitante: \n',
                    style: 'normal',
                  },
                  {
                    text: 'ANA ISABEL LANDA ZEPEDA \n',
                    style: 'normalBoldLeft',
                  },
                  {
                    text: 'Quien hizo los gastos de: \n',
                    style: 'normal',
                  },
                  {
                    text: 'AMALIA ZEPEDA VALLADARES \n',
                    style: 'normalBoldLeft',
                  },
                  {
                    text: 'Quien fallecio el ',
                    style: 'normal',
                  },
                  {
                    text: '09 de Junio del 2023 \n',
                    style: 'normal',
                  },
                  {
                    text: 'A consecuencia de: ',
                    style: 'normal',
                  },
                  {
                    text: 'Enfermedad comun \n \n \n \n',
                    style: 'normalBold',
                  },
                  {
                    text: 'PATRONO:  ',
                    style: 'normal',
                  },
                  {
                    text: 'Pensionado por el IHSS \n',
                    style: 'normalBold',
                  },
                  {
                    text: '5824 \n \n \n \n',
                    style: 'normalBold',
                  },
                  {
                    text: 'ANA ISABEL LANDA ZEPEDA \n',
                    style: 'normalBoldLeft',
                  },
                  {
                    text: 'IDENTIDAD: ',
                    style: 'normalBoldLeft',
                  },
                  {
                    text: '0801-1958-06277',
                    style: 'normalBoldLeft',
                  },
                ],
              },
              { text: 'Totales', style: 'normalBold', margin: [0, 180, 0, 0] },
              {
                text: '15,604.40',
                style: 'normalBold',
                margin: [0, 180, 0, 0],
              },
            ],
          ],
        },
      },
      {
        text: [
          {
            text: 'ES CONFORME:                                                                      PAGUESE:',
            style: 'normal1',
          },
        ],
        margin: [55, 40, 0, 0],
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 125,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        margin: [34, 20, 0, 0],
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 127,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        margin: [290, -1, 0, 0],
      },
    );

    return content;
  }
}

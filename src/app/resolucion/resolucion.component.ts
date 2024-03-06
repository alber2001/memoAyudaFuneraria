import { Component, OnInit } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from '../../assets/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { fonts } from '../config/pdfFonts';
import { styles, defaultStyle } from '../config/resolucionStyle';

pdfMake.fonts = fonts;
import { fondo } from '../files/fondo';

import { Beneficiario } from '../model/beneficiario.model';
import { BeneficiarioService } from '../services/beneficiario.service';

@Component({
  selector: 'app-resolucion',
  templateUrl: './resolucion.component.html',
  styleUrls: ['./resolucion.component.css'],
})
export class ResolucionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  generarResolucion() {
    const documentDefinition = {
      pageMargins: [55.05, 32, 55.05, 32],
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
      {
        text: 'Señor Director General: El trabajador \n \n',
        style: 'NormalLeft',
      },
      {
        table: {
          headerRows: 1,
          widths: [325, '*'],
          body: [
            [
              {
                text: 'YESENIA ORQUIDEA MORENO HERNANDEZ',
                style: 'normalBoldCenter',
              },
              { text: '0301-1950-0000184874546', style: 'normalBoldCenter' },
            ],
            [
              { text: 'Nombre del fallecido', style: 'normalCenter' },
              { text: 'No. de Afiliación', style: 'normalCenter' },
            ],
          ],
        },
      },

      { text: '\nFalleció el ', style: 'NormalLeft' },
      {
        text: 'en',
        style: 'normal',
        absolutePosition: {
          x: 294.5,
          y: 195,
        },
      },
      {
        text: 'FECHA DE FALLECIMIENTO',
        style: 'normalBold',
        absolutePosition: {
          x: 120,
          y: 193,
        },
      },
      {
        text: 'LUGAR DE FALLECIMIENTO',
        style: 'normalBold',
        absolutePosition: {
          x: 345,
          y: 193,
        },
      },

      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 190,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        margin: [47, 1, 0, 0],
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 249,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        margin: [253, 0, 0, 0],
      },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: 'a consecuencia de ', style: 'NormalLeft' },
      {
        text: 'ENFERMEDAD COMÚN ',
        style: 'normalBold',
        absolutePosition: {
          x: 170,
          y: 215,
        },
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 415,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        margin: [87, 0, 0, 0],
      },
      { text: '\n El suscrito, en su concepto de ', style: 'NormalLeft' },
      {
        text: 'PERSONA QUIEN HIZO LOS GASTOS ',
        style: 'normalBold',
        absolutePosition: {
          x: 210,
          y: 238,
        },
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 367.7,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        margin: [135, 0, 0, 0],
      },
      { text: '', style: 'espacio' },
      {
        text: 'atendio el sepelio, habiendo efectuado los siguientes gastos, cuyos comprobantes acompaño:',
        style: 'NormalLeft',
      },
      {
        text: '\n L.                                                   -   \n',
        style: 'normalRight',
      },
      { text: '', style: 'espacio' },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 503,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        margin: [0, 0, 0, 0],
      },
      {
        text: [
          {
            text: '\nEn consecuencia solicito se me conceda la Ayuda para Gastos Funerales que tuviere derecho',
            style: 'NormalLeftJustify',
          },
          {
            text: ' segun las disposiciones legales y reglemantarias. El afiliado trabajo hasta el:',
            style: 'NormalLeftJustify',
          },
        ],
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 205,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        //margin: [300, 0, 0, -5],
        absolutePosition: {
          x: 352,
          y: 332.5,
        },
      },
      { text: '', style: 'espacio' },
      { text: 'Nombre del patrono: ', style: 'NormalLeft' },
      { text: '', style: 'espacio' },
      { text: 'No. Patronal: ', style: 'NormalLeft' },
      { text: '', style: 'espacio' },
      { text: 'No. de pensionado del IHSS: ', style: 'NormalLeft' },
      {
        text: 'PENSIONADO POR EL IHSS ',
        style: 'normalBold',
        absolutePosition: {
          x: 198,
          y: 338.5,
        },
      },
      {
        text: '68254',
        style: 'normalBold',
        absolutePosition: {
          x: 270,
          y: 356,
        },
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 362.5,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        //margin: [300, 0, 0, -5],
        absolutePosition: {
          x: 195,
          y: 351.5,
        },
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 362.5,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        //margin: [300, 0, 0, -5],
        absolutePosition: {
          x: 195,
          y: 368,
        },
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 362.5,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        //margin: [300, 0, 0, -5],
        absolutePosition: {
          x: 195,
          y: 384.5,
        },
      },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      {
        table: {
          headerRows: 1,
          widths: [325, '*'],
          body: [
            [
              {
                text: 'YESENIA ORQUIDEA MORENO HERNANDEZ',
                style: 'normalBoldCenter',
              },
              { text: '0301-1950-0000184874546', style: 'normalBoldCenter' },
            ],
            [
              { text: 'Nombre del solicitante', style: 'normalCenter' },
              { text: 'No. Id. del solicitante', style: 'normalCenter' },
            ],
          ],
        },
      },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      {
        text: 'TEGUCIGALPA 14 DE MAYO DEL 2024',
        style: 'NormalLeftBold',
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 242.5,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 242.5,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        alignment: 'right',
      },
      {
        text: 'Firma del solicitante',
        margin: [340, 0, 0, 0],
        style: 'normal',
      },
      { text: '', style: 'espacio' },
      {
        table: {
          headerRows: 1,
          widths: [325, '*'],
          body: [
            [
              {
                text: 'CATORCE MIL SESENTA Y SIETE LEMPIRAS 76/100',
                style: 'normalBoldCenter',
              },
              { text: '14,067.76', style: 'normalBoldCenter' },
            ],
            [
              { text: 'Cantidad Solicitada en letras', style: 'normalCenter' },
              { text: '(En Números)', style: 'normalCenter' },
            ],
          ],
        },
        margin: [0, 0, 0, 0],
      },
      { text: '', style: 'espacio' },
      { text: 'Documentos anexos: ', style: 'normal' },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 404.9,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        //margin: [300, 0, 0, -5],
        absolutePosition: {
          x: 152,
          y: 519.5,
        },
      },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 502.5,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
      },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 502.5,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
      },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      { text: '', style: 'espacio' },
      {
        table: {
          headerRows: 1,
          widths: ['*'],
          body: [
            [
              {
                text: 'RESOLUCIÓN',
                style: 'normalBoldCenter',
              },
            ],
          ],
        },
      },
      {
        table: {
          headerRows: 1,
          widths: ['*'],
          body: [
            [
              {
                stack: [
                  { text: '', style: 'espacio' },
                  {
                    text: 'Paguese la cantidad de: L.',
                    style: 'NormalLeftJustify',
                  },
                  {
                    canvas: [
                      {
                        type: 'line',
                        x1: 0,
                        y1: 5,
                        x2: 372,
                        y2: 5,
                        lineWidth: 1,
                        lineColor: 'black',
                      },
                    ],
                    margin: [119, -8.5, 0, 0],
                  },
                  { text: '', style: 'espacio' },
                  {
                    text: 'o hasta la concurrencia de ',
                    style: 'NormalLeftJustify',
                  },
                  {
                    canvas: [
                      {
                        type: 'line',
                        x1: 0,
                        y1: 5,
                        x2: 372,
                        y2: 5,
                        lineWidth: 1,
                        lineColor: 'black',
                      },
                    ],
                    margin: [119, -7.5, 0, 0],
                  },
                  { text: '', style: 'espacio' },
                  {
                    text: 'si se hubiere hecho algún pago anteriormente en relación con el mismo sepelio. ',
                    style: 'NormalLeftJustify',
                  },
                  {
                    text: [
                      { text: 'FECHA: ', style: 'NormalLeftBold' },
                      {
                        text: '14 de Marzo del 2024 ',
                        style: 'NormalLeftBold',
                      },
                    ],
                  },
                  { text: '', style: 'espacio' },
                  { text: '', style: 'espacio' },
                  { text: '', style: 'espacio' },
                  { text: '', style: 'espacio' },
                  {
                    canvas: [
                      {
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 242.5,
                        y2: 0,
                        lineWidth: 1,
                        lineColor: 'black',
                      },
                    ],
                  },
                  {
                    canvas: [
                      {
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 242.5,
                        y2: 0,
                        lineWidth: 1,
                        lineColor: 'black',
                      },
                    ],
                    alignment: 'right',
                  },
                  {
                    text: 'NOMBRE DE LA PERSONA QUE RECIBE',
                    style: 'normalBold',
                    margin: [15, -10.5, 0, 0],
                  },
                  {
                    text: 'Nombre de quien recibe la solicitud',
                    style: 'normal',
                    margin: [27, 2, 0, 0],
                  },
                  {
                    text: 'Firma de quien recibe solicitud',
                    style: 'normal',
                    margin: [300, -11, 0, 0],
                  },
                ],
                border: [true, false, true, true],
              },
            ],
          ],
        },
      }
    );
    return content;
  }
}

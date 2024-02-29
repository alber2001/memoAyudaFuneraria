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
      {
        text: 'LUGAR, DIA, MES Y AÑO',
        style: 'normal',
        margin: [5, 13, 0, 5],
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 192.5,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        margin: [0, -4, 0, 0],
        alignment: 'left',
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 192.5,
            y2: 0,
            lineWidth: 1,
            lineColor: 'black',
          },
        ],
        margin: [-40, -4, 0, 0],
        alignment: 'right',
      },
      {
        text: 'Firma del solicitante',
        style: 'normal',
        margin: [360, -19.6, 20, 20],
        //alignment: 'right',
      },
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
      }
    );
    return content;
  }
}

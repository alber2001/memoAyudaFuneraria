import { Component, OnInit } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from '../../assets/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { fonts } from '../config/pdfFonts';
import { styles, defaultStyle } from '../config/customStyle';

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
}

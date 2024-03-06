import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  ngOnInit(): void {}

  @Output() formData = new EventEmitter<any>();
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      identidad: ['', Validators.required],
    });
  }

  enviarDatos() {
    if (this.formulario.valid) {
      this.formData.emit(this.formulario.value);
    }
  }
}

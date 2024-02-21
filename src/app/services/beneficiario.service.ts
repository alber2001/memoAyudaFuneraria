import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiario } from '../model/beneficiario.model';

@Injectable({
  providedIn: 'root',
})
export class BeneficiarioService {
  private url = 'assets/data.json';

  constructor(private http: HttpClient) {}

  obtenerBeneficiarios(): Observable<Beneficiario[]> {
    return this.http.get<Beneficiario[]>(this.url);
  }
}

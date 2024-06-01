import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from '../Models/Cita';


@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl = 'http://tu-api-url.com/citas';

  constructor(private http: HttpClient) {}

  registrarCita(cita: Cita): Observable<any> {
    return this.http.post<any>(this.apiUrl, cita);
  }
}
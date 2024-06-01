import { Injectable, inject } from '@angular/core';
import { appsettings } from '../Settings/appsetting';
import { HttpClient } from '@angular/common/http';
import { Citas } from '../Models/Citas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private http=inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + "/citas";

  constructor() { }

  listar() {
    return this.http.get<Citas[]>(`${this.apiUrl}/listar`);
  }

  registrarCita(cita: Citas): Observable<any> {
    return this.http.post<any>(this.apiUrl, cita);
  }

  obtener(codigo:number){
    return this.http.get<Citas>(`${this.apiUrl}/obtener/${codigo}`);
  }
}
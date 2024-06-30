import { Injectable, inject } from '@angular/core';
import { appsettings } from '../Settings/appsetting';
import { HttpClient } from '@angular/common/http';
import { Citas } from '../Models/Citas';
import { Observable } from 'rxjs';
import { TipoCita } from '../Models/TipoCita';

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

  listarCitasPorCliente(clienteId: number): Observable<Citas[]> {
    return this.http.get<Citas[]>(`${this.apiUrl}/listar/${clienteId}`);
  }

  registrarCita(cita: Citas): Observable<any> {
    return this.http.post<any>(this.apiUrl, cita);
  }

  obtener(idCita:number){
    return this.http.get<Citas>(`${this.apiUrl}/obtener/${idCita}`);
  }

  listarTipoCita() {
    return this.http.get<TipoCita[]>(`${this.apiUrl}/tipoCita`);
  }
}
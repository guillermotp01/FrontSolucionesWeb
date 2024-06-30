import { Injectable, inject } from '@angular/core';
import { appsettings } from '../Settings/appsetting';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../Models/Vehiculo';
import { ResponseAPI } from '../Models/ResponseAPI';
import { Modelo } from '../Models/Modelo';
import { Marca } from '../Models/Marca';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private http=inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + "/vehiculo";
  constructor() { }

  listarVehiculosCliente(clienteId: number) {
    return this.http.get<Vehiculo[]>(`${this.apiUrl}/listar/${clienteId}`);
  }

  crear(objeto:Vehiculo){
    return this.http.post<any>(`${this.apiUrl}/registrar`, objeto);
  }

  listarModelos() {
    return this.http.get<Modelo[]>(`${this.apiUrl}/modelos`);
  }

  listarMarcas() {
    return this.http.get<Marca[]>(`${this.apiUrl}/marcas`);
  }

  obtenerVehiculoPorId(vehiculoId: number){
    return this.http.get<Vehiculo>(`${this.apiUrl}/obtener/${vehiculoId}`);
  }
}

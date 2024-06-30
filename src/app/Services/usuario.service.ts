import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../Settings/appsetting';
import { Cliente } from '../Models/Cliente';
import { ResponseAPI } from '../Models/ResponseAPI';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private http=inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + "/cliente";

  constructor() { }

  listar() {
    return this.http.get<Cliente[]>(`${this.apiUrl}/listar`);
  }
  
  obtener(codigo:number){
    return this.http.get<Cliente>(`${this.apiUrl}/obtener/${codigo}`);
  }

  crear(objeto:Cliente){
    return this.http.post<ResponseAPI>(`${this.apiUrl}/registrar`, objeto);
  }

  editar(objeto:Cliente){
    return this.http.post<ResponseAPI>(`${this.apiUrl}/actualizar/${objeto.idCliente}`, objeto);
  }

  eliminar(codigo:number){
    return this.http.delete<ResponseAPI>(`${this.apiUrl}/eliminar/${codigo}`);
  }

  existeNombreUsuario(username: string){
    return this.http.get<boolean>(`${this.apiUrl}/existeUsuario/${username}`);
  }

  existeNombre(nombre: string){
    return this.http.get<boolean>(`${this.apiUrl}/existe/${nombre}`);
  }
}

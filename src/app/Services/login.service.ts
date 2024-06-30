import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../Settings/appsetting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = appsettings.apiUrl + "/validar";

  constructor(private http: HttpClient) { }

  ingresar(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ingresar`, { username, password }, { withCredentials: true });
  }

  obtenerUsuario(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usuario`, { withCredentials: true });
  }

  obtenerIdUsuario(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/usuarioId`, { withCredentials: true });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

  constructor(private router: Router) { }

  formCita(){
    this.router.navigate(['cita']);
  }

  inicio(){
    this.router.navigate(['inicio']);
  }

  nosotros(){
    this.router.navigate(['nosotros']);
  }

  contacto(){
    this.router.navigate(['contacto']);
  }

  formLogin(){
    this.router.navigate(['login']);
  }

  formRegistro(){
    this.router.navigate(['registro']);
  }
}

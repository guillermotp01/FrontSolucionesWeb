import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent implements OnInit{
  currentUser: any;

  constructor(private router: Router) { }

  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

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

  misCitas(){
    this.router.navigate(['micita']);
  }

  misDatos(){
    this.router.navigate(['miperfil']);
  }
}


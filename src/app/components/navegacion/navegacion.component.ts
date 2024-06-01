<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, inject } from '@angular/core';
>>>>>>> a7c8e5667d91f9c63a96f5a4ebcec57e5e109655
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

<<<<<<< HEAD
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
=======
  constructor(private router:Router){
  }

  citar(){
    this.router.navigate(['/cita']); 
>>>>>>> a7c8e5667d91f9c63a96f5a4ebcec57e5e109655
  }
}


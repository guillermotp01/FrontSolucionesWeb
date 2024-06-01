import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

  constructor(private router:Router){
  }

  citar(){
    this.router.navigate(['/cita']); 
  }
}


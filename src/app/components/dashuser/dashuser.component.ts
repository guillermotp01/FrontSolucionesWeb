import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashuser',
  standalone: true,
  imports: [],
  templateUrl: './dashuser.component.html',
  styleUrl: './dashuser.component.css'
})
export class DashuserComponent {
  
  constructor(private router: Router) { }

  DatosPerfil(){
    this.router.navigate(['miperfil']);
  }
  MisVehiculos(){
    this.router.navigate(['misautos']);
  }
}

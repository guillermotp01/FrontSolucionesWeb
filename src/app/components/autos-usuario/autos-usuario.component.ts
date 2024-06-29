import { Component } from '@angular/core';
import { DashuserComponent } from "../dashuser/dashuser.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-autos-usuario',
    standalone: true,
    templateUrl: './autos-usuario.component.html',
    styleUrl: './autos-usuario.component.css',
    imports: [DashuserComponent]
})
export class AutosUsuarioComponent {
  constructor(private router: Router) { }

  MisVehiculos(){
    this.router.navigate(['misautos']);
  }
}

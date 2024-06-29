import { Component } from '@angular/core';
import { DashuserComponent } from "../dashuser/dashuser.component";

@Component({
    selector: 'app-perfil-usuario',
    standalone: true,
    templateUrl: './perfil-usuario.component.html',
    styleUrl: './perfil-usuario.component.css',
    imports: [DashuserComponent]
})
export class PerfilUsuarioComponent {

}

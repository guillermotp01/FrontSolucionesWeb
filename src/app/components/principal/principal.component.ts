import { Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.css',
    imports: [NavegacionComponent, FooterComponent]
})
export default class PrincipalComponent {

}

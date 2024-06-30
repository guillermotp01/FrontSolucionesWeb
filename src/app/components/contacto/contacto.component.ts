import { Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-contacto',
    standalone: true,
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.css',
    imports: [NavegacionComponent, FooterComponent]
})
export class ContactoComponent {

}

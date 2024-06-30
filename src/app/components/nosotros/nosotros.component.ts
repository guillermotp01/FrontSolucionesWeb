import { Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-nosotros',
    standalone: true,
    templateUrl: './nosotros.component.html',
    styleUrl: './nosotros.component.css',
    imports: [NavegacionComponent, FooterComponent]
})
export class NosotrosComponent {

}

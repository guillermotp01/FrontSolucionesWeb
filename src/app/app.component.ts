import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from "./components/navegacion/navegacion.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavegacionComponent, FooterComponent]
})
export class AppComponent {
  title = 'SolucionesWebFront';
}

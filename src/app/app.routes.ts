import { Routes } from '@angular/router';
import PrincipalComponent from './components/principal/principal.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CitaComponent } from './components/cita/cita.component';
import { MIcitaComponent } from './components/micita/micita.component';

export const routes: Routes = [
    { 'path': '', component:PrincipalComponent },
    { 'path': 'inicio', component:PrincipalComponent },
    { 'path': 'nosotros', component:NosotrosComponent },
    { 'path': 'contacto', component:ContactoComponent },
    { 'path': 'cita', component:CitaComponent },
    { 'path': 'micita', component:MIcitaComponent}
];

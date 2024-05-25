import { Routes } from '@angular/router';
import PrincipalComponent from './components/principal/principal.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

export const routes: Routes = [
    { 'path': '', component:PrincipalComponent },
    { 'path': 'inicio', component:PrincipalComponent },
    { 'path': 'nosotros', component:NosotrosComponent },
    { 'path': 'contacto', component:ContactoComponent },
];

import { Routes } from '@angular/router';
import  PrincipalComponent  from './components/principal/principal.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CitaComponent } from './components/cita/cita.component';
import { MIcitaComponent } from './components/micita/micita.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

export const routes: Routes = [
    { 'path': '', component:PrincipalComponent },
    { 'path': 'inicio', component:PrincipalComponent },
    { 'path': 'nosotros', component:NosotrosComponent },
    { 'path': 'contacto', component:ContactoComponent },
    { 'path': 'cita', component:CitaComponent },
    { 'path': 'micita', component:MIcitaComponent },
    { 'path': 'login', component:LoginComponent },
    { 'path': 'registro', component:RegistroComponent },
    { 'path': 'usuario', component:UsuarioComponent },
];

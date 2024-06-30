import { Routes } from '@angular/router';
import  PrincipalComponent  from './components/principal/principal.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CitaComponent } from './components/cita/cita.component';
import { MIcitaComponent } from './components/micita/micita.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DetalleCitaComponent } from './components/detalle-cita/detalle-cita.component';
import { DashuserComponent } from './components/dashuser/dashuser.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { AutosUsuarioComponent } from './components/autos-usuario/autos-usuario.component';

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
    { 'path': 'detalleCita/:id', component:DetalleCitaComponent},
    { 'path': 'dashUser', component:DashuserComponent},
    { 'path': 'miperfil', component:PerfilUsuarioComponent},
    { 'path': 'misautos', component:AutosUsuarioComponent}
];

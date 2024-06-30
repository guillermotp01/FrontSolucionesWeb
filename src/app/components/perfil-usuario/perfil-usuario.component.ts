import { Component, OnInit } from '@angular/core';
import { DashuserComponent } from "../dashuser/dashuser.component";
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { UsuarioService } from '../../Services/usuario.service';
import { Cliente } from '../../Models/Cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-perfil-usuario',
    standalone: true,
    templateUrl: './perfil-usuario.component.html',
    styleUrl: './perfil-usuario.component.css',
    imports: [DashuserComponent, NavegacionComponent, FooterComponent, CommonModule]
})
export class PerfilUsuarioComponent  implements OnInit{
    cliente: Cliente = new Cliente(); // Objeto para almacenar los datos del usuario

    constructor(private router: Router,private loginService: LoginService) { }

    ngOnInit(): void {
        this.obtenerDatosUsuario();
    }

    obtenerDatosUsuario() {
        this.loginService.obtenerUsuario().subscribe(
        (response) => {
            this.cliente = response; 
        },
        (error) => {
            console.error('Error al obtener datos del usuario:', error);
        }
        );
    }

    miPerfil(){
        this.router.navigate(['miperfil']);
    }
    misCitas(){
        this.router.navigate(['micita']);
    }
    misVehiculos(){
        this.router.navigate(['misautos']);
    }
}

import { Component, Input, OnInit, inject } from '@angular/core';
import { CitasService } from '../../Services/citas.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Citas } from '../../Models/Citas';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { LoginService } from '../../Services/login.service';
import { Cliente } from '../../Models/Cliente';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-micita',
    standalone: true,
    templateUrl: './micita.component.html',
    styleUrls: ['./micita.component.css'],
    imports: [MatCardModule, MatTableModule, MatButtonModule, NavegacionComponent, FooterComponent, CommonModule]
})
export class MIcitaComponent implements OnInit {
  @Input('codigo') codigo!: number;
  private citasServicio = inject(CitasService);
  private loginService = inject(LoginService);
  listaCitas: Citas[] = [];
  public displayedColumns: string[] = ['idCita', 'fechaRegistro', 'estado', 'precio', 'detalle'];
  citaSeleccionada: Citas | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.obtenerCitasdelUsuario();
  }

  obtenerCitasdelUsuario() {
    this.loginService.obtenerIdUsuario().subscribe(
      (clienteId) => {
        this.citasServicio.listarCitasPorCliente(clienteId).subscribe(
          (response) => {
            this.listaCitas = response; 
          },
          (error) => {
            console.error('Error al obtener vehículos del cliente:', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener id del cliente:', error);
      }
    );
  }

  crearCita(): void {
    this.router.navigate(['cita']);
  }

  verDetalles(idCita: number) {
    this.router.navigate(['detalleCita/', idCita]); 
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

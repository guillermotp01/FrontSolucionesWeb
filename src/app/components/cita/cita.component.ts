import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../Services/citas.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Citas } from '../../Models/Citas';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { Cliente } from '../../Models/Cliente';
import { Vehiculo } from '../../Models/Vehiculo';
import { Modelo } from '../../Models/Modelo';
import { Marca } from '../../Models/Marca';
import { LoginService } from '../../Services/login.service';
import { VehiculoService } from '../../Services/vehiculo.service';
import { TipoCita } from '../../Models/TipoCita';

@Component({
    selector: 'app-cita',
    standalone: true,
    templateUrl: './cita.component.html',
    styleUrls: ['./cita.component.css'],
    imports: [CommonModule, FormsModule, NavegacionComponent, FooterComponent]
})
export class CitaComponent implements OnInit {
  cliente: Cliente = new Cliente(); 
  vehiculo: Vehiculo = new Vehiculo(); 
  vehiculos: Vehiculo[] = [];
  tipoCita: TipoCita [] = [];
  vehiculoSeleccionado: number | undefined;

  constructor(private citaService: CitasService, private router: Router, private loginService: LoginService, private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.obtenerDatosUsuario(); 
    this.obtenerVehiculosCliente();
    this.seleccionarVehiculo();
    this.obtenerTiposCita();
  }

  obtenerDatosUsuario(): void {
    this.loginService.obtenerUsuario().subscribe(
      (response) => {
        this.cliente = response;
      },
      (error) => {
        console.error('Error al obtener datos del usuario', error);
      }
    );
  }

  obtenerTiposCita(): void {
    this.citaService.listarTipoCita().subscribe(
      data => this.tipoCita = data,
      error => console.error('Error al obtener tipos', error)
    );
  }

  obtenerVehiculosCliente(): void {
    this.loginService.obtenerIdUsuario().subscribe(
      clienteId => {
        this.vehiculoService.listarVehiculosCliente(clienteId).subscribe(
          response => {
            this.vehiculos = response;
          },
          error => console.error('Error al obtener vehículos del cliente:', error)
        );
      },
      error => console.error('Error al obtener id del cliente:', error)
    );
  }

  seleccionarVehiculo(): void {
    if (this.vehiculoSeleccionado) {
      this.vehiculoService.obtenerVehiculoPorId(this.vehiculoSeleccionado).subscribe(
        response => {
          this.vehiculo = response;
        },
        error => {
          console.error('Error al obtener vehículo:', error);
        }
      );
    } else {
      this.vehiculo = new Vehiculo();
    }
  }

  registrarCita(): void {
    console.log('Registrando cita para:', this.cliente);
  }

  regreso(){
    this.router.navigate(['/cita']); 
  }
}
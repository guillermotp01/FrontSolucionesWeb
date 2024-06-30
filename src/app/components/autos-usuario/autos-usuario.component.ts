import { Component } from '@angular/core';
import { DashuserComponent } from "../dashuser/dashuser.component";
import { Router } from '@angular/router';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { Vehiculo } from '../../Models/Vehiculo';
import { LoginService } from '../../Services/login.service';
import { VehiculoService } from '../../Services/vehiculo.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Marca } from '../../Models/Marca';
import { Modelo } from '../../Models/Modelo';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-autos-usuario',
    standalone: true,
    templateUrl: './autos-usuario.component.html',
    styleUrl: './autos-usuario.component.css',
    imports: [DashuserComponent, NavegacionComponent, FooterComponent, CommonModule, ReactiveFormsModule]
})
export class AutosUsuarioComponent {
  vehiculoForm: FormGroup;
  vehiculos: Vehiculo[] = [];
  marcas: Marca[] = [];
  modelos: Modelo[] = [];
  showModal: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private vehiculoService: VehiculoService,
    private loginService: LoginService
  ) {
    this.vehiculoForm = this.fb.group({
      placa: ['', Validators.required],
      color: ['', Validators.required],
      año: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      motor: ['', Validators.required],
      modelo: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerVehiculosCliente();
    this.obtenerMarcas();
    this.obtenerModelos();
  }

  abrirModal(): void {
    this.showModal = true;
  }

  cerrarModal(): void {
    this.showModal = false;
    this.vehiculoForm.reset();
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

  registrarVehiculo() {
    if (this.vehiculoForm.valid) {
      const nuevoVehiculo = {
        id: this.vehiculoForm.value.id,
        idCliente: this.loginService.obtenerIdUsuario(), 
        placa: this.vehiculoForm.value.placa,
        color: this.vehiculoForm.value.color,
        fecha: this.vehiculoForm.value.anio,
        motor: this.vehiculoForm.value.motor,
        modelo: this.vehiculoForm.value.modelo
      };
  
      this.vehiculoService.crear(nuevoVehiculo).subscribe(
        response => {
          Swal.fire('Registro Exitoso', 'El vehículo fue registrado', 'success');
          this.vehiculoForm.reset();
        },
        error => {
          Swal.fire('ERROR', 'Hubo un error al registrar el vehículo', 'error');
          console.error('Error al registrar vehículo:', error);
        }
      );
    } else {
      Swal.fire('Formulario Incompleto', 'Por favor complete todos los campos', 'error');
    }
  }

  obtenerMarcas(): void {
    this.vehiculoService.listarMarcas().subscribe(
      data => this.marcas = data,
      error => console.error('Error al obtener marcas', error)
    );
  }

  obtenerModelos(): void {
    this.vehiculoService.listarModelos().subscribe(
      data => this.modelos = data,
      error => console.error('Error al obtener modelos', error)
    );
  }

  miPerfil(): void {
    this.router.navigate(['miperfil']);
  }

  misCitas(): void {
    this.router.navigate(['micita']);
  }

  misVehiculos(): void {
    this.router.navigate(['misautos']);
  }
}

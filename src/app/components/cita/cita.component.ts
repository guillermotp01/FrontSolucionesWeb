import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../Services/citas.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Cita } from '../../Models/Cita';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {
  cita: Cita;

  constructor(private citaService: CitasService, private router: Router) {
    this.cita = this.initializeCita();
  }

  ngOnInit(): void {}

  initializeCita(): Cita {
    return {
      fechacita: new Date(),
      horacita: { hours: 0, minutes: 0 },
      nombre: '',
      apellido: '',
      telefono: 0,
      direccion: '',
      fecha_nac: new Date(),
      correo: '',
      sexo: '',
      tipodoc: 0,
      num_doc: 0,
      marca: '',
      modelo: '',
      año: new Date(),
      color: '',
      motor: '',
      placa: '',
      obs: ''
    };
  }

  registrarCita(): void {
    this.citaService.registrarCita(this.cita).subscribe(
      response => {
        console.log('Cita registrada exitosamente', response);
        this.regreso();
        this.cita = this.initializeCita();
        alert("La cita se registro correctamente"); 
      },
      error => {
        console.error('Error al registrar la cita', error);
        alert("La cita no se pudo registrar correctamente");
      }
    );
  }

  regreso(){
    this.router.navigate(['/cita']); 
  }
}
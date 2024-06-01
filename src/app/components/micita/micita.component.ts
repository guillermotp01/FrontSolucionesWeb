import { Component, Input, inject } from '@angular/core';
import { CitasService } from '../../Services/citas.service';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Citas } from '../../Models/Citas';


@Component({
  selector: 'app-micita',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatButtonModule],
  templateUrl: './micita.component.html',
  styleUrl: './micita.component.css'
})
export class MIcitaComponent{
  @Input('codigo') codigo !: number
  private citasServicio = inject(CitasService);
  listaCitas: Citas [] = [];
  public displayedColumns: string[]=['idCita', 'fechaRegistro', 'estado', 'precio', 'detalle']


  constructor(private router:Router){
    this.listarCitas();
  }

  listarCitas(){
    this.citasServicio.listar().subscribe({
      next:(data)=>{
        if(data.length>0){
          this.listaCitas=data;
        }
      },
      error:(err)=>{
        console.log(err.message);
      }
    });
  }

  crearCita(){
    this.router.navigate(['cita']);
  }
}
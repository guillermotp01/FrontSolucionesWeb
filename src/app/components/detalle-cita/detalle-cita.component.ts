import { Component, OnInit } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { Citas } from '../../Models/Citas';
import { CitasService } from '../../Services/citas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-detalle-cita',
    standalone: true,
    templateUrl: './detalle-cita.component.html',
    styleUrl: './detalle-cita.component.css',
    imports: [NavegacionComponent, FooterComponent, FormsModule, CommonModule]
})
export class DetalleCitaComponent implements OnInit{
    citas: Citas | undefined;

    constructor(private route: ActivatedRoute, private citasService: CitasService) { }

    ngOnInit(): void {
        this.obtenerProducto();
    }
    obtenerProducto(): void {
        const id = Number(this.route.snapshot.paramMap.get('idCita')); 
        if (id) {
            this.citasService.obtener(id).subscribe(citas => {
            this.citas = citas;
            });
        }
    }
}

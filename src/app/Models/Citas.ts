import { EstadoCita } from "./EstadoCita";
import { TipoCita } from "./TipoCita";
import { Cliente } from "./Cliente";
import { Vehiculo } from "./Vehiculo";

export class Citas {
    idCita: number = 0;
    fechaRegistro: Date = new Date();
    fechaInicio: Date = new Date();
    hora: string = "";
    precio: number = 0;
    observaciones: string = "";
    cliente: Cliente  = new Cliente();
    vehiculo: Vehiculo = new Vehiculo();
    tipoCita: TipoCita = new TipoCita();
    estadoCita: EstadoCita = new EstadoCita();
}

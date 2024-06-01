import { Time } from "@angular/common";

export interface Cita{
    fechacita:Date;
    horacita:Time;
    nombre:string;
    apellido:string;
    telefono:number;
    direccion:string;
    fecha_nac:Date;
    correo:string;
    sexo:string;
    tipodoc:number;
    num_doc:number;
    marca:string;
    modelo:string;
    año:Date;
    color:string;
    motor:string;
    placa:string;
    obs:string;
}
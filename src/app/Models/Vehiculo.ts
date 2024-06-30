import { Modelo } from "./Modelo";

export class Vehiculo {
    id: number = 0;
    placa: string = "";
    color: string = "";
    fecha: number = 0;
    motor: string = "";
    modelo: Modelo = new Modelo();
}
import { Parroquia } from "./parroquia.model";

export interface Restaurante {
    id: number;
    nombre: string;
    about:string;
    parroquia:Parroquia;
    imgPrincipal: string;
}
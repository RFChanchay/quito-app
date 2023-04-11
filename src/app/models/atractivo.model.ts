import { Parroquia } from "./parroquia.model";

export interface Atractivo {
    id: number;
    id_parroquia:number;
    about:string;
    nombre: string;
    parroquia: Parroquia;
    imgPrincipal: string;
    likes: number;
}
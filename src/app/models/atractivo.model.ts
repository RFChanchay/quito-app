import { Parroquia } from "./parroquia.model";

export interface Atractivo {
    id: number;
    nombre: string;
    parroquia: Parroquia;
    imgPrincipal: string;
    likes: number;
}
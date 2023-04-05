import { Injectable } from '@angular/core';
import{createClient} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private supabaseUrl = environment.supabaseUrl;
  private supabaseKey = environment.supabaseKey;
  private supabaseClient= createClient(this.supabaseUrl, this.supabaseKey);

  constructor() { 
  }
  // Function to get a single row from a table
  async getRows(table: string) {
    const { data, error } = await this.supabaseClient
      .from(table)
      .select('*');
    return {data,error};
  }
  
  async getRowById(id:number,tabla:string){
    const { data, error } = await this.supabaseClient
    .from(tabla)
    .select(`*`)
    .eq('id',id)
    return { data, error };//
  }

  async getParroquias() {
    // Ejecuta la consulta utilizando el método 'select' de Supabase y selecciona solo las columnas 'nombre' y 'urlimagen'
    
    const { data, error } = await this.supabaseClient
      .from('parroquia')
      .select('id,nombre,imgPrincipal')
    return {data ,error};
  }

  async getRestaurantes(){
    const { data, error } = await this.supabaseClient
    .from('restaurante')
    .select(`id,nombre,imgPrincipal,parroquia(nombre)`)
    return { data, error };//
  }

  async getLugares(){
    const { data, error } = await this.supabaseClient
    .from('atractivo')
    .select(`id,nombre,about,imgPrincipal,likes,parroquia(nombre)`)
    return { data, error };//
  }
  async getImgAtractivoById(id:number){
    const { data, error } = await this.supabaseClient
    .from('imagenAtractivo')
    .select(`url`)
    .eq('id_atractivo',id)
    return { data, error };//
  }
  async getImgParroquiaById(id:number){
    const { data, error } = await this.supabaseClient
    .from('imagenParroquia')
    .select(`url`)
    .eq('id_parroquiaI',id)
    return { data, error };//
  }
  async getPlatosById(id:number){
    const { data, error } = await this.supabaseClient
    .from('plato')
    .select('*')
    .eq('id_restaurante',id)
    return { data, error };//
  }
    
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurante } from 'src/app/models/restaurante.model';
import { DatabaseService } from 'src/app/services/database.service';
import { environment } from 'src/environments/environment';
declare var mapboxgl:any;
@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {
  public pageIsLoading;
  map:any;
  infoRestaurante:Restaurante;
  platos:any;
  
  constructor(
    private route:ActivatedRoute,
    private supabase:DatabaseService
  ) { 

    this.pageIsLoading=true;
  }

  ngOnInit() {
    this.loadRestaurant();
    this.pageIsLoading=true;
  }

  ionViewDidEnter(){
    if(!this.pageIsLoading){
      this.loadMap();
    } 
  }

  async loadRestaurant() {
    const id: any= this.route.snapshot.queryParams;
    this.supabase.getRowById(id.name,'restaurante').then((data)=>{
      this.infoRestaurante=data.data as Restaurante;
      console.log(this.infoRestaurante);
      this.supabase.getPlatosById(id.name).then((data)=>{
        this.platos=data.data;
        console.log(this.platos);
        this.pageIsLoading = data.error != null ? true : false;
      });
    });
  }
  async loadMap() {
    mapboxgl.accessToken = environment.mapBoxKey;
     this.map = await new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [this.infoRestaurante.latitud, this.infoRestaurante.longitud], // Coordenadas geográficas de Nayón
      zoom: 16, // Zoom del mapa
      // Zoom del mapa
      scrollZoom: false, // Desactivar zoom con la rueda del mouse
      dragPan: false // Desactivar arrastrar el mapa con el mouse
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { environment } from 'src/environments/environment';
declare var mapboxgl:any;
@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {
  map:any;
  infoRestaurante:any;
  
  constructor(
    private route:ActivatedRoute,
    private supabase:DatabaseService
  ) { }

  ngOnInit() {
    this.loadMap();
    this.loadRestaurant();

  }
  loadRestaurant() {
    const id: any= this.route.snapshot.queryParams;
    this.supabase.getRowById(id.name,'restaurante').then((data)=>{
      this.infoRestaurante=data.data[0];
      console.log(this.infoRestaurante);
    });
  }
  loadMap() {
    mapboxgl.accessToken = environment.mapBoxKey;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-78.433333, -0.15], // Coordenadas geográficas de Nayón
      zoom: 12, // Zoom del mapa
       // Zoom del mapa
      scrollZoom: false, // Desactivar zoom con la rueda del mouse
      dragPan: false // Desactivar arrastrar el mapa con el mouse
    });
  }

}

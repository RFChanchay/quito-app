import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var mapboxgl:any;

@Component({
  selector: 'app-parroquia',
  templateUrl: './parroquia.page.html',
  styleUrls: ['./parroquia.page.scss'],
})
export class ParroquiaPage implements OnInit {
  map:any;

  constructor() { }

  ngOnInit() {
    this.loadMap();
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { environment } from 'src/environments/environment.prod';
import { Atractivo } from "src/app/models/atractivo.model";
declare var mapboxgl:any;
@Component({
  selector: 'app-atractivo',
  templateUrl: './atractivo.page.html',
  styleUrls: ['./atractivo.page.scss'],
})

export class AtractivoPage implements OnInit {
  public pageIsLoading;
  map:any;
  infoAtractivo: Atractivo;
  constructor(
    private route:ActivatedRoute,
    private supabase:DatabaseService
  ) {
    this.pageIsLoading=true;
   }

  ngOnInit() {
    this.loadAtractivo();
    this.pageIsLoading=true;
  }
  ionViewDidEnter(){
    if(!this.pageIsLoading){
      this.loadMap();
    } 
  }
  async loadAtractivo(){
    const id: any= this.route.snapshot.queryParams;
    this.supabase.getRowById(id.name,'atractivo').then((data)=>{
      this.infoAtractivo=data.data as Atractivo;
      console.log(data);
      this.pageIsLoading = data.error != null ? true : false;
    })
  }
  loadMap() {
    mapboxgl.accessToken = environment.mapBoxKey;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-78.433333, -0.15], // Coordenadas geográficas de Nayón
      zoom: 12, // Zoom del mapa
      scrollZoom: false, // Desactivar zoom con la rueda del mouse
      dragPan: false // Desactivar arrastrar el mapa con el mouse
    });
  }
}

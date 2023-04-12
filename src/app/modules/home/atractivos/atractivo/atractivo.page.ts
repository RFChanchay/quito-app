import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { environment } from 'src/environments/environment.prod';
import { Atractivo } from "src/app/models/atractivo.model";
import { Parroquia } from 'src/app/models/parroquia.model';
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
  imgParroquia:any;
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
      console.log(this.infoAtractivo);
      
      this.supabase.getRowById(this.infoAtractivo.id_parroquia,'parroquia').then((dataP)=>{
        this.infoAtractivo.parroquia=dataP.data as Parroquia;
        console.log(this.infoAtractivo.parroquia);

        this.supabase.getImgParroquia(id.name).then((dataI)=>{
          this.imgParroquia=dataI.data;
          console.log(this.imgParroquia);
          this.pageIsLoading = dataI.error != null ? true : false;
        });
      });
      
    });
  }
  async loadImgAtractivo(){
    const id: any= this.route.snapshot.queryParams;
    
  }
  async loadMap() {
    mapboxgl.accessToken = environment.mapBoxKey;
     this.map = await new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [this.infoAtractivo.longitud, this.infoAtractivo.latitud], // Coordenadas geográficas de Nayón
      zoom: 12, // Zoom del mapa
      // Zoom del mapa
      scrollZoom: false, // Desactivar zoom con la rueda del mouse
      dragPan: false // Desactivar arrastrar el mapa con el mouse
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { environment } from 'src/environments/environment';
declare var mapboxgl:any;

@Component({
  selector: 'app-parroquia',
  templateUrl: './parroquia.page.html',
  styleUrls: ['./parroquia.page.scss'],
})
export class ParroquiaPage implements OnInit{
  public loaded;
  map:any;
  infoParroquia:any;

  constructor(
    private route:ActivatedRoute,
    private supabase:DatabaseService
  ) { 
    //this.loaded=true;
  }

  ngOnInit() {
    this.loaded=true;
    console.log('on init');
    this.loadParroquia();
    console.log("setTimeout() Ejemplo...");
    //this.loaded=true;
  }
  ionViewWillEnter(){
    this.loadMap();
  }
  loadParroquia(){
    const id: any= this.route.snapshot.queryParams;
    this.supabase.getRowById(id.name,'parroquia').then((data)=>{
      this.infoParroquia=data.data[0];
      console.log(this.infoParroquia);
      this.loaded=false;
      /*setTimeout(function(){
        console.log("I am the third log after 5 seconds");
      },5000);
      this.loaded=false;*/
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parroquia } from 'src/app/models/parroquia.model';
import { DatabaseService } from 'src/app/services/database.service';
import { environment } from 'src/environments/environment';
declare var mapboxgl: any;

@Component({
  selector: 'app-parroquia',
  templateUrl: './parroquia.page.html',
  styleUrls: ['./parroquia.page.scss'],
})
export class ParroquiaPage implements OnInit {
  public pageIsLoading;
  map: any;
  infoParroquia: Parroquia = null;

  constructor(
    private route: ActivatedRoute,
    private supabase: DatabaseService
  ) {
    this.pageIsLoading = true;
  }

  ngOnInit() {
    this.loadParroquia();
    this.pageIsLoading = true;
    
  }
  ionViewDidEnter(){
    if(!this.pageIsLoading){
      this.loadMap();
    } 
  }
  /*ionViewWillEnter() {
    if (!this.pageIsLoading) {
      this.loadMap();
    }
  }*/
  async loadParroquia() {
    //console.log('entre');
    const id: any = this.route.snapshot.queryParams;
    this.supabase.getRowById(id.name, 'parroquia').then((data) => {
      this.infoParroquia = data.data as Parroquia;
      console.log(data);
      this.pageIsLoading = data.error != null ? true : false;
      
    });
  }
  async loadMap() {
    mapboxgl.accessToken = environment.mapBoxKey;
     this.map = await new mapboxgl.Map({
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('tabs') tabs:IonTabs;
  styleParroquias='';
  styleAtractivos='';
  styleGastronomia='';
  styleNoticias='border-top: 2px solid red;';


  constructor() {
    //this.obtenerTabActivo();
  }
  onTabsDidChange(){
    console.log('Tab activo:', this.tabs.getSelected());
    const activeTab=this.tabs.getSelected();
    const estilos = {
      parroquias: '',
      atractivos: '',
      gastronomia: '',
      noticias: '',
    };
    estilos[activeTab] = 'border-top: 5px solid var(--ion-color-primary);';
    for (const tab in estilos) {
      if (tab !== activeTab) {
        estilos[tab] = '';
      }
    }
    
    this.styleParroquias = estilos.parroquias;
    this.styleAtractivos = estilos.atractivos;
    this.styleGastronomia = estilos.gastronomia;
    this.styleNoticias = estilos.noticias;
  }

}

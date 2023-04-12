import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonTabs } from '@ionic/angular';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('tabs') tabs: IonTabs;
  styleParroquias = '';
  styleAtractivos = '';
  styleGastronomia = '';
  styleNoticias = '';
  styleConfiguracion = '';
  userMail: string='';
  userProfile: any;



  constructor(
    private router: Router,
    private supabase: SupabaseService,
    private alertController: AlertController
  ) {

  }

  ngOnInit() {
    this.loadProfileData();
  }

  loadProfileData() {
    //const data=this.supabase.getProfile();//con esto puedo obtner credenciales
    this.userMail = this.supabase.getUser().email;/*.then((data)=>{
      console.log(data);
    })*/
    this.supabase.getProfile().then((data) => {
      this.userProfile = data.data;
      console.log(this.userProfile);
    });
  }

  signOut() {
    this.supabase.signOut()
      .then((data: any) => {
        console.log(data);
        this.router.navigateByUrl('/auth');
      }).catch((e) => {
        console.log(e);
      });
  }

  async showAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      //subHeader: 'Important message',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  onTabsDidChange() {
    console.log('Tab activo:', this.tabs.getSelected());
    const activeTab = this.tabs.getSelected();
    const estilos = {
      parroquias: '',
      atractivos: '',
      gastronomia: '',
      noticias: '',
      configuracion: '',

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
    this.styleConfiguracion = estilos.configuracion;
  }

}

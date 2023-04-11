import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IUser } from 'src/app/models/IUser.model';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading: boolean;
  user: IUser;

  constructor(
    private router: Router,
    private supabaseService: SupabaseService,
    private alertController: AlertController
  ) {
    this.loading = false;
    this.user = {} as IUser;
   }

  ngOnInit() {
  }

  signIn() {
    this.loading = true;
    if ((!/^\S+@\S+\.\S+$/.test(this.user.email) || (this.user.password.length < 8))) {
      this.showAlert("Email o Contraseña no válidos");
      this,this.loading=false;
    } else {
      this.supabaseService.signIn(this.user.email, this.user.password)
        .then((data: any) => {
          console.log(data);
          if (data.error) {
            if (data.error.message === 'Email not confirmed') {
              this.showAlert('Verifique su correo electrónico');
            } else {
              this.showAlert('No se pudo ingresar, inténtelo más tarde');
            }
            this.loading = false;
          } else {
            this.showAlert('¡Ha iniciado sesión exitosamente!');
            this.loading = false;
            this.router.navigateByUrl('/home/parroquias');
          }
          
        }).catch((e) => {
          console.log(e);
          this.loading = false;
        });
    }
  }

  signOut(){
    this.supabaseService.signOut()
        .then((data: any) => {
          console.log(data);
          this.showAlert("Ta deslogeado");
          this.loading = false;
        }).catch((e) => {
          console.log(e);
          this.loading = false;
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
  

}

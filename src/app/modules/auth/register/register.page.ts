import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IUser } from 'src/app/models/IUser.model';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loading: boolean;
  user: IUser;

  constructor(private router: Router,
    private supabaseService: SupabaseService,
    private alertController: AlertController
  ) {
    this.loading = false;
    this.user = {} as IUser;

  }

  ngOnInit() {
  }



  public signUp(): void {
    this.loading = true;
    if ((!/^\S+@\S+\.\S+$/.test(this.user.email) || (this.user.password.length < 8))) {
      this.showAlert("Email o Contraseña no válidos");
      this,this.loading=false;
    } else {
      this.supabaseService.createUser(this.user.email, this.user.password)
        .then((data: any) => {
          console.log(data);
          this.showAlert("Usuario creado exitosamente");
          this.loading = false;
        }).catch((e) => {
          console.log(e);
          this.loading = false;
        });
    }
    // Do something here if the form is valid

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

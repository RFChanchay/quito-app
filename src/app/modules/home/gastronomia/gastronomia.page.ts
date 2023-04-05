import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.page.html',
  styleUrls: ['./gastronomia.page.scss'],
})
export class GastronomiaPage implements OnInit {

  restaurantes:any;
  constructor(
    private router:Router,
    private supabase:DatabaseService,
    
  ) { }

  ngOnInit() {
    this.getRestaurantes();
  }
  async getRestaurantes(){
    this.supabase.getRestaurantes().then((data)=>{
      console.log(data);
      this.restaurantes=data.data;
    });
  }
  getRestaurante(item){
    console.log(item);
    const navData:NavigationExtras={
      queryParams:{
        name:item?.id
      }
    };
    /*(item?.user).pipe(
      take(1)
    ).subscribe(user_data=>{
      console.log('data: ',user_data);
      const navData:NavigationExtras={
        queryParams:{
          name:user_data?.name
        }
      };*/
      this.router.navigate(['/','home','gastronomia','restaurante',item?.id],navData);
    //});
    //this.router.navigate(['/','home','parroquias','parroquia',item?.id]);
  }
}

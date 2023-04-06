import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { take } from 'rxjs';
import { Parroquia } from "src/app/models/parroquia.model";
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-parroquias',
  templateUrl: './parroquias.page.html',
  styleUrls: ['./parroquias.page.scss'],
})
export class ParroquiasPage implements OnInit {

  public pageIsLoading;
  data:any[];
  parroquias:Parroquia[];
  
  //p

  constructor(
    private router:Router,
    private supabase:DatabaseService
  ) { 
    this.pageIsLoading=true;
  }

  ngOnInit() {
    this.getParroquias();
    this.pageIsLoading=true;
  }

  
  async getParroquias(){
    this.supabase.getParroquias().then((data)=>{
      console.log(data);
      this.parroquias=data.data;
      console.log(this.parroquias);
      this.pageIsLoading = data.error != null ? true : false;
    });
    
  }
  async getRows(){
    this.supabase.getRows('parroquia').then((data)=>{
      console.log(data);
    });
  }

  getParroquia(item){
    console.log(item);
    const navData:NavigationExtras={
      queryParams:{
        name:item?.id
      }
    };
    this.router.navigate(['/','home','parroquias','parroquia',item?.id],navData);
  }

}

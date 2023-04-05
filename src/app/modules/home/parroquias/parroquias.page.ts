import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { take } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-parroquias',
  templateUrl: './parroquias.page.html',
  styleUrls: ['./parroquias.page.scss'],
})
export class ParroquiasPage implements OnInit {

  
  data:any[];
  parroquias:any;

  constructor(
    private router:Router,
    private supabase:DatabaseService
  ) { }

  ngOnInit() {
    
    this.getParroquias();
  }
  async getParroquias(){
    this.supabase.getParroquias().then((data)=>{
      console.log(data);
      this.parroquias=data.data;
      console.log(this.parroquias.data);
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

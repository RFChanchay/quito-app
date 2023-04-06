import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-atractivos',
  templateUrl: './atractivos.page.html',
  styleUrls: ['./atractivos.page.scss'],
})
export class AtractivosPage implements OnInit {
  liked = false;
  likes = 0;
  infoLugares:any;
  public pageIsLoading;

  constructor(
    private router:Router,
    private supabase:DatabaseService,
  ) { }

  ngOnInit() {
    this.getLugares();
    this.pageIsLoading=true;
  }

  
  async getLugares(){
    this.supabase.getLugares().then((data)=>{
      console.log(data);
      this.infoLugares=data.data;
      this.pageIsLoading = data.error != null ? true : false;
    });
  }

  getAtractivo(item){
    console.log(item);
    const navData:NavigationExtras={
      queryParams:{
        name:item?.id
      }
    };
    this.router.navigate(['/','home','atractivos','atractivo',item?.id],navData);
  }

  like(item) {
    this.liked = !this.liked;
    this.likes += this.liked ? 1 : -1;
  }
}

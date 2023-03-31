import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-parroquias',
  templateUrl: './parroquias.page.html',
  styleUrls: ['./parroquias.page.scss'],
})
export class ParroquiasPage implements OnInit {

  parroquias:
  [
    {nombre:'NAYON',id:'13222'},
    {nombre:'Zambiza',id:'2343a'}
  ];

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
    console.log(this.parroquias.length );
  }

  getParroquia(item){
    (item?.user).pipe(
      take(1)
    ).subscribe(user_data=>{
      console.log('data: ',user_data);
      const navData:NavigationExtras={
        queryParams:{
          name:user_data?.name
        }
      };
      this.router.navigate(['/','home','parroquias','parroquia',item?.id],navData);
    });
  }
}

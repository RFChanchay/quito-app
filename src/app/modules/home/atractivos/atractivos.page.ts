import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atractivos',
  templateUrl: './atractivos.page.html',
  styleUrls: ['./atractivos.page.scss'],
})
export class AtractivosPage implements OnInit {
  liked = false;
  likes = 0;

  constructor() { }

  ngOnInit() {
  }

  

  like() {
    this.liked = !this.liked;
    this.likes += this.liked ? 1 : -1;
  }
}

import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject, takeUntil } from 'rxjs';
import { YotubeService } from 'src/app/services/yotube.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  videos: any[];
  private unsubscribe$ = new Subject<void>();

  constructor(
    //private spinner: NgxSpinnerService, 
    private youTubeService: YotubeService
    ) { }

  ngOnInit() {
    /*this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 3000)
    this.videos = [];
    this.youTubeService
      .getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', 15)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element)
        }
      });*/
  }

}

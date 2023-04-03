import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlertController, IonModal, ModalController, NavController } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { Youtube } from 'src/app/models/youtube.model';
//import { Subject, takeUntil } from 'rxjs';
import { YotubeService } from 'src/app/services/yotube.service';



@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  videos: Item[];
  channelId = 'UCmBA_wu8xGg1OfOkfW13Q0Q';
  playlist: Item[];
  videoUrl: any;
  selectedVideo:any;
  isModalOpen = false;

  constructor(
    public navCtrl: NavController, private ytProvider: YotubeService, private alertCtrl: AlertController,
    private sanitizer: DomSanitizer,
    //public :ModalController
  ) { }

  ngOnInit() {
    console.log('Ejecutando ngOnInit');
    this.searchVideos();
  }

  async searchPlaylists() {
    await this.ytProvider.getPlaylistsForChannel(this.channelId).subscribe((items: Youtube)=>{
      this.playlist = items.items
      console.log('items: ', items.items)
    });
    
  }
  async searchVideos(){
    await this.ytProvider.getSpecificVideos('rurales quito').subscribe((items:any)=>{
      console.log(items);
      this.videos=items.items;
    });
  }
  openPlaylist(id) {
    //this.navCtrl.push('PlaylistPage', {id: id});
  }
  playVideo(video:any ) {
    console.log(video);
    console.log(typeof(video.id.videoId));
    this.selectedVideo=video;
    this.videoUrl =this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video.id.videoId)
    //this.videoUrl = 'https://www.youtube.com/embed/'+video.id.videoId;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    //
    this.isModalOpen=true;
    console.log(this.selectedVideo);
  }



  async showAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      //subHeader: 'Important message',
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }

  dismissModal() {
    this.isModalOpen=false;
  }

}

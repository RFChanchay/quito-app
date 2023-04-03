import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Youtube } from '../models/youtube.model';

@Injectable({
  providedIn: 'root'
})
export class YotubeService {
  apiKey = environment.youtubeKey;
  //playList:Observable

  constructor(public http: HttpClient) { }

  /*getPlaylistsForChannel(channel) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
    .map((res) => {
      return res.json()['items'];
    })
  }*/
  getPlaylistsForChannel(channelId: string): Observable<Youtube> {
    const url = `https://www.googleapis.com/youtube/v3/playlists?key=${this.apiKey}&channelId=${channelId}&part=snippet,id&maxResults=20`;
    return this.http.get<Youtube>(url);
  }

  getListVideos(listId): Observable<any>{
    const url= 'https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId +'&part=snippet,id&maxResults=20';
    return this.http.get(url);
  }
  
  getSpecificVideos(subject:string): Observable<any>{
    const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&q=${subject}&type=video&key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

}

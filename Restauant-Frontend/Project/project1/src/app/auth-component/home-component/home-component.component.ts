import { Component } from '@angular/core';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  videos = [
     '/assets/magie.mp4' ,
    '/assets/non.mp4' 
  ];

  constructor() {}
  
  currentVideoIndex: number = 0;

  playNextVideo() {
    if (this.currentVideoIndex < this.videos.length - 1) {
      this.currentVideoIndex++;
    } else {
      // Reset to the first video when the last video ends
      this.currentVideoIndex = 0;
    }
  }
  
}

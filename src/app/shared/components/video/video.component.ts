
import { Component, Input, OnInit } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  imports: [YouTubePlayerModule],
  standalone: true,
})
export class VideoComponent implements OnInit {
  @Input() videoId = '';

  constructor() { }

  ngOnInit() { }
}

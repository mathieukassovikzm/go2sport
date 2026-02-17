
import { Component, OnInit, input } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  imports: [YouTubePlayerModule],
  standalone: true,
})
export class VideoComponent implements OnInit {
  readonly videoId = input('');

  constructor() { }

  ngOnInit() { }
}

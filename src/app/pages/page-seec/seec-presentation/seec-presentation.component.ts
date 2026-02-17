import { Component, OnInit } from '@angular/core';
import { SectionTitleBkgBlkComponent } from '../../../shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.component';
import { VideoComponent } from '../../../shared/components/video/video.component';

@Component({
  selector: 'app-seec-presentation',
  templateUrl: './seec-presentation.component.html',
  styleUrls: ['./seec-presentation.component.scss'],
  imports: [SectionTitleBkgBlkComponent, VideoComponent],
  standalone: true,
})
export class SeecPresentationComponent implements OnInit {
  public videoId = 'LPQ-fO-aLDY';
  constructor() { }

  ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';
import { SvgBannerComponent } from '../../../svg/svg-banner/svg-banner.component';

@Component({
  selector: 'app-section-title-bkg-blk',
  templateUrl: './section-title-bkg-blk.component.html',
  styleUrls: ['./../section-title.component.scss'],
  imports: [SvgBannerComponent],
  standalone: true
})
export class SectionTitleBkgBlkComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

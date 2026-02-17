import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SvgBannerComponent } from 'src/app/shared/svg/svg-banner/svg-banner.component';

@Component({
  selector: 'app-section-title-bkg-img',
  templateUrl: './section-title-bkg-img.component.html',
  styleUrls: ['./../section-title.component.scss'],
  imports: [CommonModule, SvgBannerComponent],
  standalone: true
})
export class SectionTitleBkgImgComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

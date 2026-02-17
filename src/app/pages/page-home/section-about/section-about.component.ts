import { Component, OnInit } from '@angular/core';
import { SectionTitleBkgBlkComponent } from '../../../shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.component';
import { SvgArrowsComponent } from '../../../shared/svg/svg-arrows/svg-arrows.component';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss'],
  imports: [SectionTitleBkgBlkComponent, SvgArrowsComponent],
  standalone: true,
})
export class SectionAboutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

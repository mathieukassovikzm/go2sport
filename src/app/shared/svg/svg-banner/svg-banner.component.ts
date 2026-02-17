import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-banner',
  templateUrl: './svg-banner.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class SvgBannerComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

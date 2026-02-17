
import { Component, OnInit, input } from '@angular/core';
import { ICarouselSlideModel } from 'src/app/models/carousel-slide';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss'],
  imports: [],
  standalone: true
})
export class CarouselSlideComponent implements OnInit {
  readonly dataSlide = input<ICarouselSlideModel>({});

  constructor() { }

  ngOnInit() { }

  getImgSrc(): string {
    return `/assets/img/section-trust/${this.dataSlide().logo}`;
  }
}

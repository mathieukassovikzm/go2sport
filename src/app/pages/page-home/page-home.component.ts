import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SectionIntroComponent } from '../../shared/components/section-intro/section-intro.component';
import { CarouselEntrepriseComponent } from './carousel-entreprise/carousel-entreprise.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionG2sComponent } from './section-g2s/section-g2s.component';

const components = [SectionIntroComponent, SectionG2sComponent, SectionAboutComponent, CarouselEntrepriseComponent, FooterComponent];

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  imports: [...components],
  standalone: true,
})
export class PageHomeComponent implements OnInit {
  public titleInfo = {
    h1: 'Le sport en entreprise',
    h5: "N'allez pas plus loin nous venons à vous!",
    link: 'g2s',
  };

  constructor() { }

  ngOnInit() { }
}

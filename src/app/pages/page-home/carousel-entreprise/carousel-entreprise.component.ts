import { Component, OnInit } from '@angular/core';
import { ICarouselSlideModel } from 'src/app/models/carousel-slide';
import { SeeService } from 'src/app/services/see.service';
import { SectionTitleBkgBlkComponent } from '../../../shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.component';
import { CtnCarouselComponent } from '../../../shared/components/ctn-carousel/ctn-carousel.component';

@Component({
  selector: 'app-carousel-entreprise',
  templateUrl: './carousel-entreprise.component.html',
  styleUrls: ['./carousel-entreprise.component.scss'],
  imports: [SectionTitleBkgBlkComponent, CtnCarouselComponent],
  standalone: true,
})
export class CarouselEntrepriseComponent implements OnInit {
  public companiesSlides: ICarouselSlideModel[] = [];
  constructor(private seeService: SeeService) {
    let i = 0;
    this.companiesSlides = this.seeService.seeListPartner.map((partner) => {
      let slide = <ICarouselSlideModel>{
        index: i,
        logo: partner.logo,
        name: partner.name,
        visible: partner.visible || true,
      };
      i++;
      return slide;
    });
  }

  ngOnInit() { }
}

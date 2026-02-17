import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SectionIntroComponent } from '../../shared/components/section-intro/section-intro.component';
import { SectionTrustComponent } from './section-trust/section-trust.component';
import { SeeActiviteesComponent } from './see-activitees/see-activitees.component';
import { SeeBienfaitsComponent } from './see-bienfaits/see-bienfaits.component';
import { SeeFormulesComponent } from './see-formules/see-formules.component';
import { SeeTitresNavSvgComponent } from './see-titres-nav-svg/see-titres-nav-svg.component';

const componentList = [SectionIntroComponent, SeeTitresNavSvgComponent, SeeBienfaitsComponent, SeeFormulesComponent, SeeActiviteesComponent, SectionTrustComponent, FooterComponent];
@Component({
  selector: 'app-page-see',
  templateUrl: './page-see.component.html',
  styleUrls: ['./page-see.component.scss'],
  imports: [...componentList],
  standalone: true,
})
export class PageSeeComponent implements OnInit {
  public titleInfo = {
    h1: 'Le sport en entreprise',
    h5: '',
    link: 'title-svg-see',
  };

  constructor() { }

  ngOnInit() { }
}

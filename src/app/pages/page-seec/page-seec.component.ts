import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SectionIntroComponent } from '../../shared/components/section-intro/section-intro.component';
import { SectionTrustComponent } from './section-trust/section-trust.component';
import { SeeTitresNavSvgComponent } from './see-titres-nav-svg/see-titres-nav-svg.component';
import { SeecActiviteesComponent } from './seec-activitees/seec-activitees.component';
import { SeecFormulesComponent } from './seec-formules/seec-formules.component';
import { SeecPresentationComponent } from './seec-presentation/seec-presentation.component';

const components = [
  SectionIntroComponent,
  SeeTitresNavSvgComponent,
  SeecPresentationComponent,
  SeecFormulesComponent,
  SeecActiviteesComponent,
  SectionTrustComponent,
  FooterComponent
];

@Component({
  selector: 'app-page-seec',
  templateUrl: './page-seec.component.html',
  styleUrls: ['./page-seec.component.scss'],
  imports: [...components],
  standalone: true
})
export class PageSeecComponent implements OnInit {
  public titleInfo = {
    h1: "Le sport a l'école",
    h5: '',
    link: 'presentation',
  };

  constructor() { }

  ngOnInit() { }
}

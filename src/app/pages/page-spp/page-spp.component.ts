
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SectionIntroComponent } from '../../shared/components/section-intro/section-intro.component';
import { SectionTitleSimpleComponent } from '../../shared/components/section-title/section-title-simple/section-title-simple.component';
import { ItemSppComponent } from './item-spp/item-spp.component';

const components = [
  SectionIntroComponent,
  SectionTitleSimpleComponent,
  ItemSppComponent,
  FooterComponent
];

@Component({
  selector: 'app-page-spp',
  templateUrl: './page-spp.component.html',
  styleUrls: ['./page-spp.component.scss'],
  imports: [...components],
  standalone: true,
})
export class PageSppComponent implements OnInit {
  public elements = [
    {
      name: 'public',
      title: 'Public +16 ans',
      description: 'Ces cours sont adaptés à tout public.',
    },
    {
      name: 'materiel',
      title: 'Materiel fourni',
      description: "Vous n'avez pas à vous soucier du matériel.",
    },
    {
      name: 'people',
      title: '12 personnes max',
      description: "Afin de bénéficier d'un accompagnement personalisé.",
    },
    {
      name: 'feel',
      title: 'Sourire garanti',
      description: "Une ambiance saine afin de travailler en s'amusant.",
    },
  ];

  public titleInfo = {
    h1: 'Le sport pour particulier',
    h5: '',
    link: 'spp',
  };

  constructor() { }

  ngOnInit() { }
}

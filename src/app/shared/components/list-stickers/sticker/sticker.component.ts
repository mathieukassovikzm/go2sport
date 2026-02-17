import { Component, Input, OnInit } from '@angular/core';
import { IStickerModel } from 'src/app/models/sticker';
import { SvgCircleComponent } from '../../../svg/svg-circle/svg-circle.component';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { SvgBienEtreComponent } from '../../../svg/svg-bien-etre/svg-bien-etre.component';
import { SvgProductiviteComponent } from '../../../svg/svg-productivite/svg-productivite.component';
import { SvgRentabiliteComponent } from '../../../svg/svg-rentabilite/svg-rentabilite.component';
import { SvgEntrepriseComponent } from '../../../svg/svg-entreprise/svg-entreprise.component';
import { SvgFinancierComponent } from '../../../svg/svg-financier/svg-financier.component';
import { SvgOneHourComponent } from '../../../svg/svg-one-hour/svg-one-hour.component';
import { SvgMaterielComponent } from '../../../svg/svg-materiel/svg-materiel.component';
import { SvgDeplacementComponent } from '../../../svg/svg-deplacement/svg-deplacement.component';
import { SvgWaterComponent } from '../../../svg/svg-water/svg-water.component';
import { SvgFormationComponent } from '../../../svg/svg-formation/svg-formation.component';
import { SvgSuiviComponent } from '../../../svg/svg-suivi/svg-suivi.component';
import { SvgCyclesComponent } from '../../../svg/svg-cycles/svg-cycles.component';

var svgs = [
  SvgCircleComponent,
  SvgBienEtreComponent,
  SvgProductiviteComponent,
  SvgRentabiliteComponent,
  SvgEntrepriseComponent,
  SvgFinancierComponent,
  SvgOneHourComponent,
  SvgMaterielComponent,
  SvgDeplacementComponent,
  SvgWaterComponent,
  SvgCyclesComponent,
  SvgFormationComponent,
  SvgSuiviComponent,
];

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss'],
  imports: [CommonModule, svgs],
  standalone: true
})
export class StickerComponent implements OnInit {
  @Input() sticker: IStickerModel = {};

  constructor() { }

  ngOnInit() { }

  isBienEtre() {
    return this.sticker.name == 'BienEtre' ? true : false;
  }
  isProductivite() {
    return this.sticker.name == 'Productivite' ? true : false;
  }
  isRentabilite() {
    return this.sticker.name == 'Rentabilite' ? true : false;
  }
  isEntreprise() {
    return this.sticker.name == 'Entreprise' ? true : false;
  }
  isFinancier() {
    return this.sticker.name == 'Financier' ? true : false;
  }
  isOneHour() {
    return this.sticker.name == 'OneHour' ? true : false;
  }
  isMateriel() {
    return this.sticker.name == 'Materiel' ? true : false;
  }
  isDeplacement() {
    return this.sticker.name == 'Deplacement' ? true : false;
  }
  isWater() {
    return this.sticker.name == 'Water' ? true : false;
  }
  isFormation() {
    return this.sticker.name == 'Formation' ? true : false;
  }
  isSuivi() {
    return this.sticker.name == 'Suivi' ? true : false;
  }
  isAdaptation() {
    return this.sticker.name == 'Adaptation' ? true : false;
  }
}

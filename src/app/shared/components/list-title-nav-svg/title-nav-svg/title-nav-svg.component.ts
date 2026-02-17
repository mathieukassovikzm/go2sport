import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IPageNavModel } from 'src/app/models/pageNav';
import { UiService } from 'src/app/services/ui.service';
import { SvgBienEtreComponent } from '../../../svg/svg-bien-etre/svg-bien-etre.component';
import { SvgCircleComponent } from '../../../svg/svg-circle/svg-circle.component';
import { SvgCombatComponent } from '../../../svg/svg-combat/svg-combat.component';
import { SvgDeplacementComponent } from '../../../svg/svg-deplacement/svg-deplacement.component';
import { SvgEntrepriseComponent } from '../../../svg/svg-entreprise/svg-entreprise.component';
import { SvgFinancierComponent } from '../../../svg/svg-financier/svg-financier.component';
import { SvgFitnessComponent } from '../../../svg/svg-fitness/svg-fitness.component';
import { SvgMaterielComponent } from '../../../svg/svg-materiel/svg-materiel.component';
import { SvgOneHourComponent } from '../../../svg/svg-one-hour/svg-one-hour.component';
import { SvgOutdoorComponent } from '../../../svg/svg-outdoor/svg-outdoor.component';
import { SvgProductiviteComponent } from '../../../svg/svg-productivite/svg-productivite.component';
import { SvgRaquettesComponent } from '../../../svg/svg-raquettes/svg-raquettes.component';
import { SvgRentabiliteComponent } from '../../../svg/svg-rentabilite/svg-rentabilite.component';
import { SvgSportCoComponent } from '../../../svg/svg-sport-co/svg-sport-co.component';
import { SvgWaterComponent } from '../../../svg/svg-water/svg-water.component';
import { DottedLineComponent } from '../../dotted-line/dotted-line.component';

const svgs = [
  SvgCircleComponent,
  DottedLineComponent,
  SvgBienEtreComponent,
  SvgProductiviteComponent,
  SvgRentabiliteComponent,
  SvgEntrepriseComponent,
  SvgFinancierComponent,
  SvgOneHourComponent,
  SvgMaterielComponent,
  SvgDeplacementComponent,
  SvgWaterComponent,
  SvgFitnessComponent,
  SvgCombatComponent,
  SvgSportCoComponent,
  SvgRaquettesComponent,
  SvgOutdoorComponent,
];
@Component({
  selector: 'app-title-nav-svg',
  templateUrl: './title-nav-svg.component.html',
  styleUrls: ['./title-nav-svg.component.scss'],
  imports: [CommonModule, svgs],
  standalone: true,
})
export class TitleNavSvgComponent implements OnInit {
  @Input() titleSvg: IPageNavModel = {};

  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit() { }

  isBienfaits() {
    return this.titleSvg.name == 'Bienfaits' ? true : false;
  }
  isFormules() {
    return this.titleSvg.name == 'Formules' ? true : false;
  }
  isActivites() {
    return this.titleSvg.name == 'Activites' ? true : false;
  }

  goToSection() {
    this.uiService.moveSlowToId(this.viewportScroller, `${this.titleSvg.link}`);
  }
}


import { Component, OnInit, input } from '@angular/core';
import { ITrustModel } from 'src/app/models/partner';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
  imports: [],
  standalone: true
})
export class PartnerComponent implements OnInit {
  readonly partner = input<ITrustModel>({});
  constructor() { }

  ngOnInit() { }

  getImgSrc(): string {
    return `/assets/img/section-trust/${this.partner().logo}`;
  }
}

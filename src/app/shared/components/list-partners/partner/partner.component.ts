import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ITrustModel } from 'src/app/models/partner';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class PartnerComponent implements OnInit {
  @Input() partner: ITrustModel = {};
  constructor() { }

  ngOnInit() { }

  getImgSrc(): string {
    return `/assets/img/section-trust/${this.partner.logo}`;
  }
}

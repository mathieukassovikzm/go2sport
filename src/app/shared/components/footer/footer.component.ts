
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutesNames } from 'src/app/models/routes';
import { SvgAddressComponent } from '../../svg/svg-address/svg-address.component';
import { SvgEmailComponent } from '../../svg/svg-email/svg-email.component';
import { SvgFacebookComponent } from '../../svg/svg-facebook/svg-facebook.component';
import { SvgInstagramComponent } from '../../svg/svg-instagram/svg-instagram.component';
import { SvgLinkedinComponent } from '../../svg/svg-linkedin/svg-linkedin.component';
import { SvgPhoneComponent } from '../../svg/svg-phone/svg-phone.component';

const svgs = [
  SvgAddressComponent,
  SvgEmailComponent,
  SvgFacebookComponent,
  SvgInstagramComponent,
  SvgLinkedinComponent,
  SvgPhoneComponent,
];
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [svgs, RouterModule],
  standalone: true
})
export class FooterComponent implements OnInit {
  public pageMentionsLegales = RoutesNames.PageMentionsLegales;
  public pagePolitiqueConfidentialite =
    RoutesNames.PagePolitiqueConfidentialite;

  constructor() { }

  ngOnInit() { }

  getRouteMentionLegales(): string {
    return `../${this.pageMentionsLegales}`;
  }
  getRoutePolitiqueConfidentialite(): string {
    return `../${this.pagePolitiqueConfidentialite}`;
  }
}

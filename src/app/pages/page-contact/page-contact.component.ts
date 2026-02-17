import { Component, OnInit } from '@angular/core';
import { SvgFacebookComponent } from '../../shared/svg/svg-facebook/svg-facebook.component';
import { SvgInstagramComponent } from '../../shared/svg/svg-instagram/svg-instagram.component';
import { SvgLinkedinComponent } from '../../shared/svg/svg-linkedin/svg-linkedin.component';

const svgs = [SvgFacebookComponent, SvgInstagramComponent, SvgLinkedinComponent];

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss'],
  imports: [...svgs],
  standalone: true,
})
export class PageContactComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

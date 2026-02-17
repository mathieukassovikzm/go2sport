
import { Component, Input, OnInit } from '@angular/core';
import { PartnerComponent } from './partner/partner.component';

@Component({
  selector: 'app-list-partners',
  templateUrl: './list-partners.component.html',
  styleUrls: ['./list-partners.component.scss'],
  imports: [PartnerComponent],
  standalone: true
})
export class ListPartnersComponent implements OnInit {
  @Input() listOfPartners: any;
  constructor() { }

  ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';
import { SeeService } from 'src/app/services/see.service';
import { ListPartnersComponent } from '../../../shared/components/list-partners/list-partners.component';
import { SectionTitleBkgBlkComponent } from '../../../shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.component';

const components = [SectionTitleBkgBlkComponent, ListPartnersComponent];

@Component({
  selector: 'app-section-trust',
  templateUrl: './section-trust.component.html',
  imports: [...components],
  standalone: true,
})
export class SectionTrustComponent implements OnInit {
  public companies;
  constructor(private seeService: SeeService) {
    this.companies = this.seeService.seeListPartner;
  }

  ngOnInit() { }
}

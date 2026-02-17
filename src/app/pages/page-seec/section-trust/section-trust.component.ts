import { Component, OnInit } from '@angular/core';
import { SeecService } from 'src/app/services/seec.service';
import { ListPartnersComponent } from '../../../shared/components/list-partners/list-partners.component';
import { SectionTitleBkgBlkComponent } from '../../../shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.component';

@Component({
  selector: 'app-section-trust',
  templateUrl: './section-trust.component.html',
  imports: [SectionTitleBkgBlkComponent, ListPartnersComponent],
  standalone: true,
})
export class SectionTrustComponent implements OnInit {
  public companies;
  constructor(private seecService: SeecService) {
    this.companies = this.seecService.seecListPartner;
  }

  ngOnInit() { }
}

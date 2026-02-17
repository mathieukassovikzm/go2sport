import { Component, OnInit } from '@angular/core';
import { SeeService } from 'src/app/services/see.service';
import { ListStickersComponent } from '../../../shared/components/list-stickers/list-stickers.component';
import { SectionTitleBkgBlkComponent } from '../../../shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.component';

@Component({
  selector: 'app-see-bienfaits',
  templateUrl: './see-bienfaits.component.html',
  imports: [SectionTitleBkgBlkComponent, ListStickersComponent],
  standalone: true,
})
export class SeeBienfaitsComponent implements OnInit {
  public bienfaits;

  constructor(private seeService: SeeService) {
    this.bienfaits = this.seeService.seeListBienfaits;
  }

  ngOnInit() { }
}

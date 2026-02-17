import { Component, OnInit } from '@angular/core';
import { SeecService } from 'src/app/services/seec.service';
import { ListStickersComponent } from '../../../shared/components/list-stickers/list-stickers.component';
import { SectionTitleBkgBlkComponent } from '../../../shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.component';

@Component({
  selector: 'app-seec-formules',
  templateUrl: './seec-formules.component.html',
  imports: [SectionTitleBkgBlkComponent, ListStickersComponent],
  standalone: true,
})
export class SeecFormulesComponent implements OnInit {
  public formules;

  constructor(private seecService: SeecService) {
    this.formules = this.seecService.seecListFormules;
  }

  ngOnInit() { }
}

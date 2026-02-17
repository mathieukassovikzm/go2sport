import { Component, OnInit } from '@angular/core';
import { SeeService } from 'src/app/services/see.service';
import { SectionTitleBkgBlkComponent } from '../../../shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.component';
import { ListStickersComponent } from '../../../shared/components/list-stickers/list-stickers.component';

@Component({
  selector: 'app-see-formules',
  templateUrl: './see-formules.component.html',
  imports: [SectionTitleBkgBlkComponent, ListStickersComponent],
  standalone: true,
})
export class SeeFormulesComponent implements OnInit {
  public formules;
  constructor(private seeService: SeeService) {
    this.formules = this.seeService.seeListFormules;
  }

  ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';
import { SeecService } from 'src/app/services/seec.service';
import { ListActivitiesComponent } from '../../../shared/components/list-activities/list-activities.component';
import { SectionTitleBkgBlkComponent } from '../../../shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.component';

@Component({
  selector: 'app-seec-activitees',
  templateUrl: './seec-activitees.component.html',
  styleUrls: ['./seec-activitees.component.scss'],
  imports: [SectionTitleBkgBlkComponent, ListActivitiesComponent],
  standalone: true,
})
export class SeecActiviteesComponent implements OnInit {
  public activitees;
  constructor(private seecService: SeecService) {
    this.activitees = this.seecService.seecListActivities;
  }

  ngOnInit() { }
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IActivityModel } from 'src/app/models/activity';
import { ActivityComponent } from './activity/activity.component';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss'],
  imports: [CommonModule, ActivityComponent],
  standalone: true
})
export class ListActivitiesComponent implements OnInit {
  @Input() listActivities: IActivityModel[] = [];
  constructor() { }

  ngOnInit() { }
}

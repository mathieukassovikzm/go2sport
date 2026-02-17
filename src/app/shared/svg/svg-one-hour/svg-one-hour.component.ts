import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-one-hour',
  templateUrl: './svg-one-hour.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class SvgOneHourComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

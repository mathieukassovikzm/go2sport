import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-phone',
  templateUrl: './svg-phone.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class SvgPhoneComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

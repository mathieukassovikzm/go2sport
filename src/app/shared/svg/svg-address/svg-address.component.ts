import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-address',
  templateUrl: './svg-address.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class SvgAddressComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

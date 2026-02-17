import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-financier',
  templateUrl: './svg-financier.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class SvgFinancierComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}


import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-dotted-line',
  templateUrl: './dotted-line.component.html',
  styleUrls: ['./dotted-line.component.scss'],
  imports: [],
  standalone: true
})
export class DottedLineComponent implements OnInit {
  readonly direction = input('left');
  constructor() { }

  ngOnInit() { }

  getClassDottedLine() {
    return `dotted-line ${this.direction()}`;
  }
}

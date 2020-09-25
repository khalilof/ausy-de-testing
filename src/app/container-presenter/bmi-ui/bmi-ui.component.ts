import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bmi-ui',
  templateUrl: './bmi-ui.component.html',
  styleUrls: ['./bmi-ui.component.scss']
})
export class BmiUiComponent implements OnInit {
  weight: any;
  height: any;

  @Output() calculateEvent = new EventEmitter<{height, weight}>();

  constructor() { }

  ngOnInit(): void {
  }

  calculate(): void {
    this.calculateEvent.emit({height: this.height, weight: this.weight});
  }
}

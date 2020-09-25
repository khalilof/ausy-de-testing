import { Component, OnInit } from '@angular/core';
import { BmiBrainService } from '../bmi-brain.service';

@Component({
  selector: 'app-bmi-container',
  templateUrl: './bmi-container.component.html',
  styleUrls: ['./bmi-container.component.scss']
})
export class BmiContainerComponent implements OnInit {

  constructor(public bmiBrainService: BmiBrainService) { }

  ngOnInit(): void {
  }

  calculateEventHandler($event: { height, weight }): void {
    const result = this.bmiBrainService.calculateBMI($event.weight, $event.height);
    console.log(result);
  }
}

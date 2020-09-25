import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  appTitle = 'ausy-de-testing';
  buttonClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(): void {
    this.buttonClicked = !this.buttonClicked;
    console.log('this button was clicked');
  }
}

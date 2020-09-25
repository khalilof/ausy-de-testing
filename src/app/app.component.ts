import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'ausy-de-testing';
  buttonClicked = false;

  clickButton(): void {
    this.buttonClicked = !this.buttonClicked;
    console.log('this button was clicked');
  }
}

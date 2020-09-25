import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiBrainService {

  private bmi: number;
  constructor() {}


  calculateBMI(weight: number, height: number): string {
    this.bmi = weight / Math.pow(height / 100, 2);
    return this.bmi.toFixed(1).toString();
  }

  getResults(): string {
    if (this.bmi >= 25) {
      return 'Overweight';
    } else if (this.bmi > 18.5) {
      return 'Normal';
    } else {
      return 'Underweight';
    }
  }

  getInterpretation(): string {
    if (this.bmi >= 25) {
      return 'You have a higher than normal body weight. Try to exercise more.';
    } else if (this.bmi > 18.5) {
      return 'You have a normal body weight. Good job!';
    } else {
      return 'You have a lower than normal body weight. You can eat a bit more.';
    }
  }
}

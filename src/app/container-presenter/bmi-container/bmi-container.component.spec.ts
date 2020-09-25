import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiContainerComponent } from './bmi-container.component';
import { FormsModule } from '@angular/forms';
import { BmiUiComponent } from '../bmi-ui/bmi-ui.component';

describe('BmiContainerComponent', () => {
  let component: BmiContainerComponent;
  let fixture: ComponentFixture<BmiContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiContainerComponent, BmiUiComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

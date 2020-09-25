import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiUiComponent } from './bmi-ui.component';
import { FormsModule } from '@angular/forms';

describe('BmiUiComponent', () => {
  let component: BmiUiComponent;
  let fixture: ComponentFixture<BmiUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiUiComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

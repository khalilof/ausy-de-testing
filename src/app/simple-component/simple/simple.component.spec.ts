import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent } from './simple.component';
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(SimpleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ausy-de-testing'`, () => {
    fixture = TestBed.createComponent(SimpleComponent);
    const app = fixture.componentInstance;
    expect(app.appTitle).toEqual('ausy-de-testing');
  });

  it('should render title', () => {
    fixture = TestBed.createComponent(SimpleComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1.title').textContent).toContain('ausy-de-testing');
  });

  it('should update title dynamically', () => {
    fixture = TestBed.createComponent(SimpleComponent);
    const app = fixture.componentInstance;
    app.appTitle = 'new Title';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.input-sample span').textContent).toContain('new Title');
  });
});

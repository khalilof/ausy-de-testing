import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ausy-de-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.appTitle).toEqual('ausy-de-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1.title').textContent).toContain('ausy-de-testing');
  });

  it('should update title dynamically', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.appTitle = 'new Title';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.input-sample span').textContent).toContain('new Title');
  });
});

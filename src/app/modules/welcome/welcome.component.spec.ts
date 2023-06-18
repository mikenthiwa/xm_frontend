import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { WelcomeHomeComponent} from "./components/welcome-home/welcome-home.component";

describe('WelcomeComponent', () => {
  let component: WelcomeHomeComponent;
  let fixture: ComponentFixture<WelcomeHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeHomeComponent],
    });
    fixture = TestBed.createComponent(WelcomeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the welcome message', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('welcome-home');
  });

});

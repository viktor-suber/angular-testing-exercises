import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingDisplayComponent } from './greeting-display.component';
import { GreetingService } from '../../services/greeting/greeting.service';

describe('GreetingDisplayComponent', () => {
  let component: GreetingDisplayComponent;
  let fixture: ComponentFixture<GreetingDisplayComponent>;
  let mockGreetingService: Partial<GreetingService>;

  beforeEach(async () => {
    mockGreetingService = {
      getGreeting: jasmine.createSpy().and.returnValue('Mock Greeting!')
    };

    await TestBed.configureTestingModule({
      declarations: [GreetingDisplayComponent],
      providers: [{provide: GreetingService, useValue: mockGreetingService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the greeting', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toBe('Mock Greeting!')
  });
});

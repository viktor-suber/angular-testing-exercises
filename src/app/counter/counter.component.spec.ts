import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { CounterModule } from './counter.module';  // Import the module containing the component

describe('CounterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterModule],  // Import the module here
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
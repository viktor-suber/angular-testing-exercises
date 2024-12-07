import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { CounterModule } from './counter.module';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      imports: [CounterModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should start with a count of 0', () => {
      expect(component.count).toBe(0);
    });
  });

  describe('Increment/Decrement', () => {
    it('should increment the count', () => {
      component.increment();
      expect(component.count).toBe(1);
    });

    it('should decrement the count', () => {
      component.decrement();
      expect(component.count).toBe(-1);
    });
  });
});
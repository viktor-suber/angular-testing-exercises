import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AsyncDemoComponent } from './async-demo.component';
import { AsyncDemoModule } from './async-demo.module';

describe('AsyncDemoComponent', () => {
  let component: AsyncDemoComponent;
  let fixture: ComponentFixture<AsyncDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncDemoModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // BROKEN
  it('should display "Data Loaded!" after 1 second', fakeAsync(() => {
    fixture.detectChanges(); // Initial change detection
    tick(1000); // Advance the virtual clock
    fixture.detectChanges(); // Detect changes again after tick
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p.message-1')?.textContent).toBe('Data Loaded!');
  }));  

  // BROKEN
  it('should display "Data 2 Loaded!" after 2 seconds', fakeAsync(() => {
    tick(2000);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p.message-2')?.textContent).toBe('Data 2 Loaded!');
  }) );
});

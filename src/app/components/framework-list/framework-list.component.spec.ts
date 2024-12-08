import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkListComponent } from './framework-list.component';
import { DataService } from '../../services/data/data.service';

describe('FrameworkListComponent', () => {
  let component: FrameworkListComponent;
  let fixture: ComponentFixture<FrameworkListComponent>;
  let mockDataService: Partial<DataService>;

  beforeEach(async () => {
    mockDataService = {
      getData: jasmine.createSpy().and.returnValue(['Angular', 'React', 'Vue']),
    };

    await TestBed.configureTestingModule({
      imports: [FrameworkListComponent],
      providers: [{ provide: DataService, useValue: mockDataService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of three frameworks: Angular, React, and Vue', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const listItems = compiled.querySelectorAll('li');
    expect(listItems.length).toBe(3);
    expect(listItems[0].textContent).toContain('Angular');
    expect(listItems[1].textContent).toContain('React');
    expect(listItems[2].textContent).toContain('Vue');
  });
});

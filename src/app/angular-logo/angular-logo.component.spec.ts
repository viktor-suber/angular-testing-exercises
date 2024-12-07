import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLogoComponent } from './angular-logo.component';

describe('AngularLogoComponent', () => {
  let component: AngularLogoComponent;
  let fixture: ComponentFixture<AngularLogoComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLogoComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render an <svg> of class 'angular-logo'`, () => {
    const svgElement = compiled.querySelector('svg.angular-logo');
    expect(svgElement).toBeTruthy(); 
  });
});

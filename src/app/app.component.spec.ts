import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let app: AppComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  describe('Initialization and Layout', () => {
    beforeEach(() => {
      app = fixture.componentInstance;
    });

    it('should create the app', () => {
      expect(app).toBeTruthy();
    });
  
    it(`should have the 'angular-testing-exercises' title`, () => {
      expect(app.title).toEqual('angular-testing-exercises');
    });

    it(`should render a <main> element with class 'main' that contains a <div> with class 'outer-content'`, () => {
      const mainElement = compiled.querySelector('main');
      expect(mainElement).toBeTruthy();
      expect(mainElement?.classList).toContain('main');
      const outerContentDiv = mainElement?.querySelector('div.outer-content');
      expect(outerContentDiv).toBeTruthy();
    });

    it(`should render a <div> with class 'outer-content' that contains a <div> with class 'inner-content' and two <div> with class 'divider'`, () => {
      const outerContentDiv = compiled.querySelector('div.outer-content');
      expect(outerContentDiv).toBeTruthy();
      const innerContentDiv = outerContentDiv?.querySelector('div.inner-content');
      expect(innerContentDiv).toBeTruthy();
      const dividers = outerContentDiv?.querySelectorAll('div.divider');
      expect(dividers?.length).toEqual(2);
    });
  });

  describe('Header elements', () => {
    it('should render the Angular logo', () => {
      const ngLogoComponentElement = compiled.querySelector('app-angular-logo');
      expect(ngLogoComponentElement).toBeTruthy();
    });
  
    it('should render the content of logo', () => {
      const ngLogoSvg = compiled.querySelector('app-angular-logo svg');
      expect(ngLogoSvg).toBeTruthy();
    });
  
    it('should render title', () => {
      expect(compiled.querySelector('h2')?.textContent).toContain('Hello, angular-testing-exercises');
    });
  
    it('should render subtitle', () => {
      expect(compiled.querySelector('h3')?.textContent).toContain('Angular unit testing exercise.');
    });
  });

  describe('Body elements', () => {
    it('should render paragraph with body text', () => {
      const paragraph = compiled.querySelector('p.body-text');
    
      expect(paragraph).toBeTruthy();
      expect(paragraph?.textContent).toContain('Congratulations! Your app is running.');
    });

    it('should render a counter component', () => {
      const counterComponent = compiled.querySelector('app-counter');
      expect(counterComponent).toBeTruthy();
    });
  });

});

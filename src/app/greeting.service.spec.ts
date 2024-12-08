import { TestBed } from '@angular/core/testing';

import { GreetingService } from './greeting.service';
import { DataService } from './services/data/data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GreetingService', () => {
  let service: GreetingService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GreetingService],
    });
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return "Hello, World!" from getGreeting', () => {
    const mockResponse = 'Hello, World!';
    const greeting = service.getGreeting();
    expect(greeting).toEqual(mockResponse);
  });
});

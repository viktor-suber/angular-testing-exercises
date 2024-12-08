import { TestBed } from '@angular/core/testing';

import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  let service: GreetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreetingService],
    });
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return "Hello, World!" from getGreeting', () => {
    const greeting = service.getGreeting();
    expect(greeting).toEqual('Hello, World!');
  });
});

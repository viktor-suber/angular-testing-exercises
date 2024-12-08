import { Component } from '@angular/core';
import { GreetingService } from '../../services/greeting/greeting.service';

@Component({
  selector: 'app-greeting-display',
  templateUrl: './greeting-display.component.html',
  styleUrl: './greeting-display.component.scss'
})
export class GreetingDisplayComponent {
  greeting = '';

  constructor(private greetingService: GreetingService) {}

  ngOnInit(): void {
    this.greeting = this.greetingService.getGreeting();
  }
}

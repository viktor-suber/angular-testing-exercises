import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularLogoComponent } from "./components/angular-logo/angular-logo.component";
import { CounterModule } from './components/counter/counter.module';
import { FrameworkListModule } from './components/framework-list/framework-list.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularLogoComponent, CounterModule, FrameworkListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-testing-exercises';
}

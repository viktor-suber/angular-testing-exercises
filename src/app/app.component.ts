import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularLogoComponent } from "./angular-logo/angular-logo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularLogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-testing-exercises';
}

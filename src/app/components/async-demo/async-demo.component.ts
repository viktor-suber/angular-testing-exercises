import { Component } from '@angular/core';

@Component({
  selector: 'app-async-demo',
  templateUrl: './async-demo.component.html',
  styleUrl: './async-demo.component.scss'
})
export class AsyncDemoComponent {
  message = 'Loading...';
  message2 = 'Loading 2...';

  ngOnInit() {
    setTimeout(() => {
      this.message = 'Data Loaded!';
    }, 1000);

    setTimeout(() => {
      this.message2 = 'Data 2 Loaded!';
    }, 2000);
  }
}

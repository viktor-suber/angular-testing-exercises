import { Component } from '@angular/core';

@Component({
  selector: 'app-async-demo',
  templateUrl: './async-demo.component.html',
  styleUrl: './async-demo.component.scss'
})
export class AsyncDemoComponent {
  message = 'Loading...';

  ngOnInit() {
    setTimeout(() => {
      this.message = 'Data Loaded!';
    }, 1000);
  }
}

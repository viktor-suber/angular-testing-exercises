import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent]  // Make sure it's exported so it can be used in other modules
})
export class CounterModule {}
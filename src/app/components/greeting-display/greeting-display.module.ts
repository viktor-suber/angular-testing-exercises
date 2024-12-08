import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingDisplayComponent } from './greeting-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GreetingDisplayComponent],
  exports: [GreetingDisplayComponent]
})
export class GreetingDisplayModule {}
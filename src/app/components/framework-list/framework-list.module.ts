import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkListComponent } from './framework-list.component';

@NgModule({
  imports: [CommonModule, FrameworkListComponent],
  exports: [FrameworkListComponent]
})
export class FrameworkListModule {}

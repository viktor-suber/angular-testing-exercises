import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-framework-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.scss'
})
export class FrameworkListComponent {
  frameworks: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.frameworks = this.dataService.getData();
  }
}

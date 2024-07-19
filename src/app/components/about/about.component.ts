import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public projectName = 'Angular Contact List';
  public version = '1.0.0';
  public developer = 'Alex Ivanov';
  public features = [
    'Display list of contacts',
    'Search functionality',
    'View detailed contact information',
    'Add new contacts',
    'Edit existing contacts',
    'Delete contacts',
    'Data validation',
    'Local storage for data persistence'
  ];
  public supportEmail = 'support@example.com'
}

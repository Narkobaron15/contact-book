import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  public contacts: {
    name: string,
    position: string,
    email: string,
    phone: string
  }[] = [
    {
      name: 'John Doe',
      position: 'Customer Support Manager',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
    },
    {
      name: 'Jane Smith',
      position: 'Technical Support Specialist',
      email: 'jane.smith@example.com',
      phone: '+1 (555) 987-6543',
    },
    {
      name: 'Mike Johnson',
      position: 'Sales Representative',
      email: 'mike.johnson@example.com',
      phone: '+1 (555) 246-8135',
    },
  ];
}

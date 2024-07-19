import {Component} from '@angular/core'
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common"
import ContactService from "../../services/contact/contact.service"
import {RouterLink} from "@angular/router"

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    RouterLink,
    NgIf,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private contactService: ContactService) {
  }

  get contacts() {
    return this.contactService.contacts
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id)
  }
}

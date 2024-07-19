import {Component} from '@angular/core';
import Contact from "../../models/contact";
import ContactService from "../../services/contact/contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  private readonly _contact: Contact

  constructor(
    private service: ContactService,
    private router: Router,
  ) {
    this._contact = new Contact(
      // Bad practice, but it works for now (until we have a real backend)
      service.contacts.length + 1,
      '',
      '',
      '',
    );
  }

  get contact(): Contact {
    return this._contact!;
  }

  createContact() {
    this.service.createContact(this.contact);
    this.router.navigate(['/contacts']).catch(console.error);
  }
}

import {Component, OnInit} from '@angular/core';
import Contact from "../../models/contact";
import ContactService from "../../services/contact/contact.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  private _contact?: Contact

  constructor(
    private service: ContactService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  get contact(): Contact {
    return this._contact!;
  }

  updateContact() {
    this.service.updateContact(this.contact);
    this.router.navigate(['/contacts']).catch(console.error);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const contact = this.service.getContact(id);

    if (!contact) {
      this.router.navigate(['/404']).catch(console.error);
      return
    }

    this._contact = contact;
  }
}

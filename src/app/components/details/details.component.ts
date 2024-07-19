import {Component, OnInit} from '@angular/core'
import ContactService from "../../services/contact/contact.service"
import Contact from "../../models/contact"
import {ActivatedRoute, Router} from "@angular/router"
import {NgIf, NgOptimizedImage} from "@angular/common"
import {SpinnerComponent} from "../spinner/spinner.component"

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    SpinnerComponent,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  private _contact?: Contact

  constructor(
    private service: ContactService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  get contact(): Contact {
    return this._contact!
  }

  editContact(): void {
    this.router.navigate(['/contacts', this.contact.id, 'edit'])
      .catch(console.error)
  }

  deleteContact(): void {
    this.service.deleteContact(this.contact.id)
    this.router.navigate(['/'])
      .catch(console.error)
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    const contact = this.service.getContact(id)

    if (!contact) {
      // redirect to 404
      this.router.navigate(['/404']).catch(console.error)
      return
    }

    this._contact = contact
  }
}

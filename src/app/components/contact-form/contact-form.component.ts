import {Component, OnInit} from '@angular/core'
import Contact from "../../models/contact"
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import {ActivatedRoute, Router} from "@angular/router"
import ContactService from "../../services/contact/contact.service"
import {NgIf} from "@angular/common"

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup
  isEditMode: boolean = false
  contactId: number | null = null

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      avatar: [null],
    })
  }

  public ngOnInit() {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'))
    this.isEditMode = !!this.contactId

    if (!this.isEditMode) return

    const contact = this.contactService.getContact(this.contactId)
    if (!contact) {
      this.router.navigate(['/contacts']).catch(console.error)
      return
    }
    this.contactForm.patchValue(contact)
  }

  public onSubmit() {
    if (!this.contactForm.valid) return

    const formData = this.contactForm.value
    if (formData.avatar?.trim().length === 0) {
      formData.avatar = null
    }
    const contact = new Contact(
      this.contactId && this.contactId > 0
        ? this.contactId
        : this.contactService.contacts.length + 1,
      formData.name,
      formData.email,
      formData.phone,
      formData.avatar,
    )

    if (this.isEditMode) {
      this.contactService.updateContact(contact)
    } else {
      this.contactService.createContact(contact)
    }

    this.router.navigate(['/contacts']).catch(console.error)
  }
}

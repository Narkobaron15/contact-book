import Contact from "../../models/contact";
import {Injectable} from "@angular/core";
import {LocalContactService} from "../local-contact/local-contact.service";

@Injectable({
  providedIn: 'root',
  useClass: LocalContactService
})
abstract class ContactService {
  abstract get contacts(): Contact[]
  abstract getContact(id: number): Contact | null
  abstract createContact(contact: Contact): void
  abstract updateContact(contact: Contact): void
  abstract deleteContact(id: number): boolean
}

export default ContactService

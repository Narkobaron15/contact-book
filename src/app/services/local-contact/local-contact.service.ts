import Contact from "../../models/contact";
import ContactService from "../contact/contact.service";
import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable()
export class LocalContactService implements ContactService {
  private readonly _contacts: Contact[]
  private readonly localStorage?: Storage

  constructor(@Inject(DOCUMENT) document: Document) {
    // super()
    this.localStorage = document.defaultView?.localStorage
    this._contacts = this.initContacts()
    if (this._contacts.length === 0) {
      this._contacts = this.seedContacts()
      this.saveContacts()
    }
  }

  public get contacts(): Contact[] {
    return this._contacts
  }

  public getContact(id: number): Contact | null {
    return this._contacts.find(contact => contact.id === id) ?? null
  }

  public createContact(contact: Contact): void {
    this._contacts.push(contact)
    this.saveContacts()
  }

  public updateContact(contact: Contact): void {
    const index = this._contacts.findIndex(c => c.id === contact.id)
    this._contacts[index] = contact
    this.saveContacts()
  }

  public deleteContact(id: number): boolean {
    const index = this._contacts.findIndex(contact => contact.id === id)
    if (index === -1) {
      return false
    }
    this._contacts.splice(index, 1)
    this.saveContacts()
    return true
  }

  private initContacts() {
    const contactsJson = this.localStorage?.getItem('contacts') ?? '[]'
    return JSON.parse(contactsJson).map((contact: any) => new Contact(
      contact.id,
      contact.name,
      contact.email,
      contact.phone,
      contact.avatar,
    ))
  }

  private saveContacts() {
    this.localStorage?.setItem('contacts', JSON.stringify(this._contacts))
  }

  private seedContacts() {
    return [
      new Contact(
        1,
        "John Doe",
        "johndoe@example.com",
        "123-456-7890",
        null,
      ),
      new Contact(
        2,
        "Jane Smith",
        "janesmith@example.com",
        "234-567-8901",
        null,
      ),
      new Contact(
        3,
        "Alice Johnson",
        "alicejohnson@example.com",
        "345-678-9012",
        null,
      ),
      new Contact(
        4,
        "Bob Brown",
        "bobbrown@example.com",
        "456-789-0123",
        null,
      ),
      new Contact(
        5,
        "Charlie Davis",
        "charliedavis@example.com",
        "567-890-1234",
        null,
      ),
    ]
  }
}

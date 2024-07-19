import Contact from "../models/contact";

export default interface ContactService {
  get contacts(): Contact[]
  getContact(id: number): Contact | null
  createContact(contact: Contact): void
  updateContact(contact: Contact): void
  deleteContact(id: number): boolean
}

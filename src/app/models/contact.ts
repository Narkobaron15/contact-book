export default class Contact {
  id: number
  name: string
  email: string
  phone: string
  avatar: string | null = null

  constructor(
    id: number,
    name: string,
    email: string,
    phone: string,
    avatar: string | null = null,
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    this.avatar = avatar
  }

  public avatarUrl(size: number = 64): string {
    return this.avatar ?? `https://ui-avatars.com/api/?name=${this.name}&size=${size}`
  }
}

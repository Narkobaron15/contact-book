import { TestBed } from '@angular/core/testing'

import { LocalContactService } from './local-contact.service'

describe('LocalContactService', () => {
  let service: LocalContactService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(LocalContactService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

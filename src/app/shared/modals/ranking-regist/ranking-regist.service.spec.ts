import { TestBed } from '@angular/core/testing'

import { RankingRegistService } from './ranking-regist.service'

describe('RankingRegistService', () => {
  let service: RankingRegistService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(RankingRegistService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

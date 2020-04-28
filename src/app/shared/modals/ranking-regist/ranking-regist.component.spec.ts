import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RankingRegistComponent } from './ranking-regist.component'

describe('RankingRegistComponent', () => {
  let component: RankingRegistComponent
  let fixture: ComponentFixture<RankingRegistComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RankingRegistComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingRegistComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

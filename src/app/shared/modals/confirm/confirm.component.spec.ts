import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { BsModalRef } from 'ngx-bootstrap/modal'

import { ConfirmComponent } from './confirm.component'

describe('ConfirmComponent', () => {
  let component: ConfirmComponent
  let fixture: ComponentFixture<ConfirmComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmComponent],
      providers: [BsModalRef]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

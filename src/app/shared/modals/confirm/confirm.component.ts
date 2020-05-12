import { Component, OnInit } from '@angular/core'
import { BsModalRef } from 'ngx-bootstrap/modal'
import { Subject } from 'rxjs'

import { RESULT_MESSAGE_NG } from '../../constants'

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  message!: string
  result!: Subject<boolean>
  isOK = true

  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {
    if (this.message === RESULT_MESSAGE_NG) {
      this.isOK = false
    }
    this.result = new Subject()
    setTimeout(() => {
      this.result.next(true)
      this.bsModalRef.hide()
    }, 1000)
  }
}

import { Injectable } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap'
import { Subject } from 'rxjs'

import { RESULT_MESSAGE_NG, RESULT_MESSAGE_OK } from '../../constants'
import { ConfirmComponent } from './confirm.component'

@Injectable()
export class ConfirmService {
  private bsModalRef!: BsModalRef

  constructor(private modalService: BsModalService) {}
  openResultModal(result: boolean): Subject<boolean> {
    if (result) {
      return this.openModal(RESULT_MESSAGE_OK)
    }
    return this.openModal(RESULT_MESSAGE_NG)
  }

  private openModal(message: string): Subject<boolean> {
    this.bsModalRef = this.modalService.show(ConfirmComponent, {
      initialState: { message },
      class: 'modal-lg'
    })

    return this.bsModalRef.content.result
  }
}

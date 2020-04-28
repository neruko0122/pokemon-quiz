import { Injectable } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap'
import { Subject } from 'rxjs'

import { RankingRegistComponent } from './ranking-regist.component'

@Injectable({
  providedIn: 'root'
})
export class RankingRegistService {
  private bsModalRef!: BsModalRef

  constructor(private modalService: BsModalService) {}

  openResultModal(): Subject<string> {
    return this.openModal()
  }

  private openModal(): Subject<string> {
    this.bsModalRef = this.modalService.show(RankingRegistComponent, {
      initialState: {},
      class: 'modal-lg'
    })

    return this.bsModalRef.content.result
  }
}

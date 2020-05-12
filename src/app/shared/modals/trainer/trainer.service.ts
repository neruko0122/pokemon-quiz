import { Injectable } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { Subject } from 'rxjs'

import { ADVENTURE_LIST } from '../../constants'
import { TrainerComponent } from './trainer.component'

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private bsModalRef!: BsModalRef

  constructor(private modalService: BsModalService) {}

  openTrainerModal(count: number): Subject<boolean> {
    return this.openModal(
      ADVENTURE_LIST[count].characterImage,
      ADVENTURE_LIST[count].line
    )
  }

  private openModal(imageUrl: string, line: string): Subject<boolean> {
    this.bsModalRef = this.modalService.show(TrainerComponent, {
      initialState: { imageUrl, line },
      class: 'modal-lg'
    })

    return this.bsModalRef.content.result
  }
}

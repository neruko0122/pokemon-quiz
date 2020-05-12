import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ModalModule } from 'ngx-bootstrap/modal'

import { TrainerComponent } from './trainer.component'
import { TrainerService } from './trainer.service'

@NgModule({
  declarations: [TrainerComponent],
  imports: [CommonModule, ModalModule.forRoot()],
  providers: [TrainerService],
  entryComponents: [TrainerComponent]
})
export class TrainerModule {}

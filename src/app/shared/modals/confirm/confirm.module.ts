import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ModalModule } from 'ngx-bootstrap/modal'

import { ConfirmComponent } from './confirm.component'
import { ConfirmService } from './confirm.service'

@NgModule({
  declarations: [ConfirmComponent],
  imports: [CommonModule, ModalModule.forRoot()],
  providers: [ConfirmService],
  entryComponents: [ConfirmComponent]
})
export class ConfirmModule {}

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ModalModule } from 'ngx-bootstrap/modal'

import { RankingRegistComponent } from './ranking-regist.component'
import { RankingRegistService } from './ranking-regist.service'

@NgModule({
  declarations: [RankingRegistComponent],
  imports: [CommonModule, ModalModule.forRoot(), ReactiveFormsModule],
  providers: [RankingRegistService],
  entryComponents: [RankingRegistComponent]
})
export class RankingRegistModule {}

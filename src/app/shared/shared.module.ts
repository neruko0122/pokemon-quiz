import { ScrollingModule } from '@angular/cdk/scrolling'
import { CommonModule, DatePipe } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { ConfirmModule } from './modals/confirm'
import { RankingRegistModule } from './modals/ranking-regist/ranking-regist.module'
import { TrainerModule } from './modals/trainer/trainer.module'

const modules = [
  CommonModule,
  ReactiveFormsModule,
  ScrollingModule,
  ConfirmModule,
  RankingRegistModule,
  TrainerModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [DatePipe]
})
export class SharedModule {}

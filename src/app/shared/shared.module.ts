import { ScrollingModule } from '@angular/cdk/scrolling'
import { CommonModule, DatePipe } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { ConfirmModule } from './modals/confirm'
import { MoveComponent } from './animations/move/move.component'

const modules = [
  CommonModule,
  ReactiveFormsModule,
  ScrollingModule,
  ConfirmModule
]

@NgModule({
  declarations: [MoveComponent],
  imports: [...modules],
  exports: [...modules],
  providers: [DatePipe]
})
export class SharedModule {}

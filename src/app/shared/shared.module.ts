import { ScrollingModule } from '@angular/cdk/scrolling'
import { CommonModule, DatePipe } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { ConfirmModule } from './modals/confirm'

const modules = [
  CommonModule,
  ReactiveFormsModule,
  ScrollingModule,
  ConfirmModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [DatePipe]
})
export class SharedModule {}

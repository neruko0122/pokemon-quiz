import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared/shared.module'

import { TopRoutingModule } from './top-routing.module'
import { TopComponent } from './top.component'

@NgModule({
  declarations: [TopComponent],
  providers: [],
  imports: [TopRoutingModule, FormsModule, SharedModule]
})
export class TopModule {}

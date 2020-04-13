import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'

import { ResultRoutingModule } from './result-routing.module'
import { ResultComponent } from './result.component'

@NgModule({
  declarations: [ResultComponent],
  imports: [ResultRoutingModule, SharedModule]
})
export class ResultModule {}

import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'

import { RankingRoutingModule } from './ranking-routing.module'
import { RankingComponent } from './ranking.component'

@NgModule({
  declarations: [RankingComponent],
  imports: [RankingRoutingModule, SharedModule]
})
export class RankingModule {}

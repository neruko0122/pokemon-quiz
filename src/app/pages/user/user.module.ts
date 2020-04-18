import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared/shared.module'

import { UserRoutingModule } from './user-routing.module'
import { UserComponent } from './user.component'

@NgModule({
  declarations: [UserComponent],
  providers: [],
  imports: [UserRoutingModule, FormsModule, SharedModule]
})
export class UserModule {}

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'

import { PagesRoutingModule } from './pages-routing.module'
import { PagesComponent } from './pages.component'
import { HeaderComponent } from './shared/header/header.component';
import { TestComponent } from './test/test.component'

@NgModule({
  declarations: [PagesComponent, HeaderComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class PagesModule {}

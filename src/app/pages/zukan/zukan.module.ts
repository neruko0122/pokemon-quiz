import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ZukanRoutingModule } from "./zukan-routing.module";
import { ZukanComponent } from "./zukan.component";

@NgModule({
  declarations: [ZukanComponent],
  imports: [CommonModule, ZukanRoutingModule]
})
export class ZukanModule {}

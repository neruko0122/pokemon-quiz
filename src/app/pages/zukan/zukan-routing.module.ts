import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ZukanComponent } from "./zukan.component";

const routes: Routes = [
  {
    path: "",
    component: ZukanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZukanRoutingModule {}

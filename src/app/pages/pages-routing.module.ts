import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "top",
        loadChildren: () => import("./top/top.module").then(m => m.TopModule)
      },
      {
        path: "quiz",
        loadChildren: () => import("./quiz/quiz.module").then(m => m.QuizModule)
      },
      {
        path: "result",
        loadChildren: () =>
          import("./result/result.module").then(m => m.ResultModule)
      },
      {
        path: "setting",
        loadChildren: () =>
          import("./setting/setting.module").then(m => m.SettingModule)
      },
      {
        path: "user",
        loadChildren: () => import("./user/user.module").then(m => m.UserModule)
      },
      {
        path: "map",
        loadChildren: () => import("./map/map.module").then(m => m.MapModule)
      },
      {
        path: "ranking",
        loadChildren: () =>
          import("./ranking/ranking.module").then(m => m.RankingModule)
      },
      {
        path: "zukan",
        loadChildren: () =>
          import("./zukan/zukan.module").then(m => m.ZukanModule)
      },
      {
        path: "zukan-detail/:index",
        loadChildren: () =>
          import("./zukan/shared/components/detail/detail.module").then(
            m => m.DetailModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}

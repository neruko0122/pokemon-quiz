import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PagesComponent } from './pages.component'

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'top',
        loadChildren: () => import('./top/top.module').then(m => m.TopModule)
      },
      {
        path: 'quiz',
        loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule)
      },
      {
        path: 'result',
        loadChildren: () =>
          import('./result/result.module').then(m => m.ResultModule)
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./setting/setting.module').then(m => m.SettingModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}

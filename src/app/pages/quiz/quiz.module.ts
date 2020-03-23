import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared/shared.module'

import { QuizRoutingModule } from './quiz-routing.module'
import { QuizComponent } from './quiz.component'

@NgModule({
  declarations: [QuizComponent],
  imports: [QuizRoutingModule, FormsModule, SharedModule]
})
export class QuizModule {}

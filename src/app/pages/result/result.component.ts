import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import {
  RESULT_EXCELLENT,
  RESULT_FAILING,
  RESULT_GOOD,
  RESULT_PASSING
} from 'src/app/shared/constants'
import { AnswerService } from 'src/app/shared/services/answer.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  answerList!: any[]
  resultMessage!: string

  constructor(
    private answerService: AnswerService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.hide()
    this.answerList = this.answerService.getAnswer()
    if (this.answerList) {
      this.getResultMessage()
    }
  }

  restart() {
    this.spinner.show()
    this.router.navigate(['/quiz'])
  }

  setting() {
    this.spinner.show()
    this.router.navigate(['/setting'])
  }

  private getResultMessage() {
    var correctAnswers = 0
    for (var answer of this.answerList) {
      if (answer.success) {
        correctAnswers++
      }
    }
    var answerRate = (correctAnswers / this.answerList.length) * 100
    if (answerRate === 100) {
      this.resultMessage = RESULT_EXCELLENT
    }
    if (answerRate < 99 && answerRate >= 80) {
      this.resultMessage = RESULT_GOOD
    }
    if (answerRate < 80 && answerRate >= 50) {
      this.resultMessage = RESULT_PASSING
    }
    if (answerRate < 50) {
      this.resultMessage = RESULT_FAILING
    }
  }
}

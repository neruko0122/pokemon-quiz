import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import {
  ADVENTURE_LIST,
  RESULT_CLEAR,
  RESULT_EXCELLENT,
  RESULT_FAILING,
  RESULT_GOOD,
  RESULT_NEXT,
  RESULT_PASSING,
  RESULT_RETRY
} from 'src/app/shared/constants'
import { AnswerService } from 'src/app/shared/services/answer.service'
import { SettingService } from 'src/app/shared/services/setting.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  answerList!: any[]
  resultMessage!: string
  adventureFlag = false
  perfectFlag = false
  finishFlag = false

  constructor(
    private answerService: AnswerService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private settingService: SettingService
  ) {}

  ngOnInit(): void {
    this.spinner.hide()
    this.adventureFlag = this.settingService.getAdventure()
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

  next() {
    this.spinner.show()
    this.settingService.setAdventureCount()
    this.router.navigate(['/quiz'])
  }

  top() {
    this.settingService.setAdventure(false)
    this.router.navigate(['/top'])
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
      if (this.adventureFlag) {
        this.perfectFlag = true
        if (
          this.settingService.getAdventureCount() + 1 ===
          ADVENTURE_LIST.length
        ) {
          this.resultMessage = RESULT_CLEAR
          this.finishFlag = true
        } else {
          this.resultMessage = RESULT_NEXT
        }
      } else {
        this.resultMessage = RESULT_EXCELLENT
      }
    }
    if (answerRate < 99 && answerRate >= 80) {
      if (this.adventureFlag) {
        this.resultMessage = RESULT_RETRY
      } else {
        this.resultMessage = RESULT_GOOD
      }
    }
    if (answerRate < 80 && answerRate >= 50) {
      if (this.adventureFlag) {
        this.resultMessage = RESULT_RETRY
      } else {
        this.resultMessage = RESULT_PASSING
      }
    }
    if (answerRate < 50) {
      if (this.adventureFlag) {
        this.resultMessage = RESULT_RETRY
      } else {
        this.resultMessage = RESULT_FAILING
      }
    }
  }
}

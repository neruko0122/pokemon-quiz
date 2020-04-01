import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { AnswerService } from 'src/app/shared/services/answer.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  answerList!: any[]
  constructor(
    private answerService: AnswerService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.hide()
    this.answerList = this.answerService.getAnswer()
  }

  restart() {
    this.spinner.show()
    this.router.navigate(['/quiz'])
    setTimeout(() => {
      this.spinner.hide()
    }, 500)
  }

  setting() {
    this.spinner.show()
    this.router.navigate(['/setting'])
    setTimeout(() => {
      this.spinner.hide()
    }, 500)
  }
}

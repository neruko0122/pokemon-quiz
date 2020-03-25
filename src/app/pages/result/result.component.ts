import { Component, OnInit } from '@angular/core'
import { AnswerService } from 'src/app/shared/services/answer.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  answerList!: any[]
  constructor(private answerService: AnswerService) {}

  ngOnInit(): void {
    this.answerList = this.answerService.getAnswer()
    console.log(this.answerList)
  }
}

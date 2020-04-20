import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

import { QUESTIONS } from '../constants'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  answerList: any[]
  constructor(private http: Http) {}

  clearList() {
    this.answerList = []
  }

  addAnswer(target, quizType, choice: string, correctAnswer, imageUrl) {
    this.answerList.push({
      no: target['number'],
      question: QUESTIONS[quizType].value,
      answer: choice,
      correctAnswer: correctAnswer,
      success: correctAnswer === choice,
      image: imageUrl
    })
  }

  getAnswer() {
    return this.answerList
  }

  findAnswer(): Observable<Response> {
    return this.http.get(environment.API_HOST + '/api/answers')
  }

  createAnswer(answer): Observable<Response> {
    return this.http.post(environment.API_HOST + '/api/answers', answer)
  }
}

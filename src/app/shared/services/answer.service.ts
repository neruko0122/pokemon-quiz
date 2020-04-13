import { Injectable } from '@angular/core'

import { QUESTIONS } from '../constants'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  answerList: any[]
  constructor() {}

  clearList() {
    this.answerList = []
  }

  addAnswer(target, quizType, choice: string, correctAnswer, imageUrl) {
    this.answerList.push({
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
}

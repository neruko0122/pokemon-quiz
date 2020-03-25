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

  addAnswer(target, quizType, choice: string) {
    var correctAnswer = null
    switch (quizType) {
      case 1:
        correctAnswer = target['name']
        break
      case 2:
        correctAnswer = target['types']
        break
      case 3:
        correctAnswer = target['evolutions']
        break
      case 4:
        correctAnswer = target['abilities']
        break
    }
    this.answerList.push({
      question: QUESTIONS[quizType].value,
      answer: choice,
      correctAnswer: correctAnswer,
      success: correctAnswer === choice
    })
    console.log(this.answerList)
  }

  getAnswer() {
    return this.answerList
  }
}

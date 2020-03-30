import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { AnswerService } from 'src/app/shared/services/answer.service'
import { DataService } from 'src/app/shared/services/data.service'

import { QUESTIONS, QUIZ_TYPES } from './../../shared/constants/quiz'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  form: FormGroup
  data: any
  target: any = null
  quizType = 0
  quizTypes = QUIZ_TYPES
  question!: string
  answer1!: string
  answer2!: string
  answer3!: string
  answer4!: string
  imageUrl!: string
  count = 1
  inputClass = 'form-control col-sm-9'
  labelClass = 'col-sm-3 col-form-label col-form-label-sm'
  formGroupClass = 'form-group row align-items-center'

  constructor(
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder,
    private http: HttpClient,
    private answerService: AnswerService,
    private spinner: NgxSpinnerService
  ) {
    this.data = this.dataService.import()
    this.answerService.clearList()
  }

  ngOnInit(): void {
    if (this.count > 10) {
      this.router.navigate(['/result'])
    }
    this.buildForm()
    this.data.subscribe(json => {
      var pokemon = this.getPokemonData(json, 0, false)
      this.quizType = this.getQuizType(pokemon)
      this.question = QUESTIONS[this.quizType].value
      this.getPokemonImage(pokemon['no'])
      this.getAnswer(pokemon, this.quizType)
      this.form.patchValue({
        number: pokemon['no'],
        name: pokemon['name'],
        types: pokemon['types'],
        abilities: pokemon['abilities'],
        hiddenAbilities: pokemon['hiddenAbilities'],
        evolutions: pokemon['evolutions'].length > 0 ? 'する' : 'しない',
        status: pokemon['status']
      })
      this.target = {
        number: pokemon['no'],
        name: pokemon['name'],
        types: pokemon['types'],
        abilities: pokemon['abilities'],
        hiddenAbilities: pokemon['hiddenAbilities'],
        evolutions:
          pokemon['evolutions'].length > 0
            ? this.getEvolution(json, pokemon)[0]['name']
            : '',
        status: pokemon['status']
      }
    })
  }

  private buildForm(): void {
    this.form = this.fb.group({
      number: [null],
      name: [null],
      types: [null],
      abilities: [null],
      hiddenAbilities: [null],
      evolutions: [null],
      status: [null]
    })
  }

  get number(): FormControl {
    return this.form.get('number') as FormControl
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl
  }

  get types(): FormControl {
    return this.form.get('types') as FormControl
  }

  get abilities(): FormControl {
    return this.form.get('abilities') as FormControl
  }

  get hiddenAbilities(): FormControl {
    return this.form.get('hiddenAbilities') as FormControl
  }

  get evolutions(): FormControl {
    return this.form.get('evolutions') as FormControl
  }

  get status(): FormControl {
    return this.form.get('status') as FormControl
  }

  private getPokemonData(data: any, excludeNum: number, isEvolution: boolean) {
    var min = 1
    var max = 260

    var number = Math.floor(Math.random() * (max + 1 - min)) + min
    if (number == excludeNum) {
      // 問題のポケモンは除外して取り直し
      return this.getPokemonData(data, excludeNum, isEvolution)
    }
    if (isEvolution && data[number - 1]['evolutions'].length === 0) {
      // 進化系問題で進化先のない場合は取り直し
      return this.getPokemonData(data, excludeNum, isEvolution)
    }
    if (data[number - 1]['form'] !== '') {
      // アローラのすがたは取り直し
      return this.getPokemonData(data, excludeNum, isEvolution)
    }
    if (data[number - 1]['isMegaEvolution']) {
      // メガシンカ後も取り直し
      return this.getPokemonData(data, excludeNum, isEvolution)
    }
    // TODO: 選択肢のポケモン同士で回答が被るケースを防ぐ
    switch (this.quizType) {
      case 1:
        // 同名のポケモンはいないのでスルー（アローラのすがたは別途検討）
        break
      case 2:
        // 問題のポケモンと同一タイプは取り直し
        if (this.target.types[0] === data[number - 1]['types'][0]) {
          if (
            this.target.types.length < 2 ||
            this.target.types[1] === data[number - 1]['types'][1]
          ) {
            return this.getPokemonData(data, excludeNum, isEvolution)
          }
        }
        break
      case 3:
        // 同名のポケモンに進化しないのでスルー
        break
      case 4:
        // 問題のポケモンと同一とくせいは取り直し
        if (this.target.abilities[0] === data[number - 1]['abilities'][0]) {
          if (
            this.target.abilities.length < 2 ||
            this.target.abilities[1] === data[number - 1]['abilities'][1]
          ) {
            return this.getPokemonData(data, excludeNum, isEvolution)
          }
        }
        break
      default:
        break
    }
    return data[number - 1]
  }

  private getPokemonImage(number) {
    var imageUrl =
      '/assets/images/pokemon/' + this.getZeroPadding(number) + '.png'
    this.http.get(imageUrl).subscribe(
      res => {
        this.imageUrl = imageUrl
      },
      error => {
        if (error.status === 200) {
          this.imageUrl = imageUrl
        } else {
          this.imageUrl = '/assets/images/noimage.png'
        }
      }
    )
  }

  private getQuizType(target) {
    var min = 1
    var max = 4
    // 1: 名前当て
    // 2: タイプ当て
    // 3: 新化先当て
    // 4: 特性当て

    var typeNum = Math.floor(Math.random() * (max + 1 - min)) + min
    if (typeNum !== 3) {
      return typeNum
    } else {
      if (target['evolutions'].length > 0 && target['evolutions'][0] < 260) {
        return typeNum
      } else {
        return this.getQuizType(target)
      }
    }
  }

  private getZeroPadding(number) {
    return ('000' + number).slice(-3)
  }

  private getAnswer(target, typeNum) {
    this.data.subscribe(json => {
      var dummy1 = this.getPokemonData(json, target['no'], typeNum === 3)
      var dummy2 = this.getPokemonData(json, target['no'], typeNum === 3)
      var dummy3 = this.getPokemonData(json, target['no'], typeNum === 3)
      var answerList = [target, dummy1, dummy2, dummy3]
      answerList.sort(() => Math.random() - 0.5)

      switch (typeNum) {
        case 1:
          this.answer1 = answerList[0]['name']
          this.answer2 = answerList[1]['name']
          this.answer3 = answerList[2]['name']
          this.answer4 = answerList[3]['name']
          break
        case 2:
          this.answer1 = answerList[0]['types']
          this.answer2 = answerList[1]['types']
          this.answer3 = answerList[2]['types']
          this.answer4 = answerList[3]['types']
          break
        case 3:
          this.answer1 = this.getEvolution(json, answerList[0])[0]['name']
          this.answer2 = this.getEvolution(json, answerList[1])[0]['name']
          this.answer3 = this.getEvolution(json, answerList[2])[0]['name']
          this.answer4 = this.getEvolution(json, answerList[3])[0]['name']
          break
        case 4:
          this.answer1 = answerList[0]['abilities']
          this.answer2 = answerList[1]['abilities']
          this.answer3 = answerList[2]['abilities']
          this.answer4 = answerList[3]['abilities']
          break
        default:
          break
      }
    })
  }

  private getEvolution(data: any[], base: any) {
    const result = data.filter(target => {
      return target['no'] == base['evolutions'][0]
    })
    return result
  }

  register(choice: string) {
    this.spinner.show()
    this.answerService.addAnswer(
      this.target,
      this.quizType,
      choice,
      this.imageUrl
    )
    this.count += 1
    this.ngOnInit()
    setTimeout(() => {
      this.spinner.hide()
    }, 1000)
  }
}

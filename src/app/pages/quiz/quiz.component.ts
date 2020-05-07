import { HttpClient } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { TYPES, WEAKNESS_LIST } from 'src/app/shared/constants/weakness'
import { ConfirmService } from 'src/app/shared/modals/confirm'
import { AnswerService } from 'src/app/shared/services/answer.service'
import { DataService } from 'src/app/shared/services/data.service'
import { SettingService } from 'src/app/shared/services/setting.service'

import { QUESTIONS, QUIZ_TYPES } from './../../shared/constants/quiz'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {
  form: FormGroup
  data: any
  pokemonData: any
  target: any = null
  quizType = 0
  quizTypes = QUIZ_TYPES
  question!: string
  answer1!: string
  answer2!: string
  answer3!: string
  answer4!: string
  imageUrl!: string
  range: any[]
  level: any[]
  count = 1
  maxCount = 10
  inputClass = 'form-control col-sm-10 col-xs-9'
  labelClass = 'col-sm-2 col-xs-3 col-form-label col-form-label-sm'
  formGroupClass = 'form-group row align-items-center'
  answerList$: Subject<any[]> = new Subject()
  answerStatus = this.answerList$.asObservable()
  onDestroy$ = new Subject()
  readFlag = false
  adventureFlag = false
  weaknessAnswer = null

  constructor(
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder,
    private http: HttpClient,
    private answerService: AnswerService,
    private spinner: NgxSpinnerService,
    private settingService: SettingService,
    private confirmService: ConfirmService
  ) {
    this.data = this.dataService.import()
    this.answerService.clearList()
    this.adventureFlag = this.settingService.getAdventure()
    if (this.adventureFlag) {
      this.settingService.setAdventureSetting(
        this.settingService.getAdventureCount()
      )
    }
    this.range = this.settingService.getRange()
    this.level = this.settingService.getLevel()
    this.maxCount = this.settingService.getQuizCount()
  }

  ngOnInit(): void {
    this.spinner.hide()
    this.buildForm()
    this.getNext()

    this.answerStatus.subscribe(response => {
      if (!response) {
        return this.getAnswer(
          this.target,
          this.quizType,
          this.target['weakness']
        )
      }
      response.sort(() => Math.random() - 0.5)
      this.resetAnswer()
      switch (this.quizType) {
        case 1:
          this.answer1 = response[0]['name']
          this.answer2 = response[1]['name']
          this.answer3 = response[2]['name']
          this.answer4 = response[3]['name']
          break
        case 2:
          this.answer1 = response[0]['types']
          this.answer2 = response[1]['types']
          this.answer3 = response[2]['types']
          this.answer4 = response[3]['types']
          break
        case 3:
          this.answer1 = this.getEvolution(this.pokemonData, response[0])[0][
            'name'
          ]
          this.answer2 = this.getEvolution(this.pokemonData, response[1])[0][
            'name'
          ]
          this.answer3 = this.getEvolution(this.pokemonData, response[2])[0][
            'name'
          ]
          this.answer4 = this.getEvolution(this.pokemonData, response[3])[0][
            'name'
          ]
          break
        case 4:
          this.answer1 = response[0]['abilities']
          this.answer2 = response[1]['abilities']
          this.answer3 = response[2]['abilities']
          this.answer4 = response[3]['abilities']
          break
        case 5:
          console.log('じゃくてん')
          this.answer1 = response[0]
          this.answer2 = response[1]
          this.answer3 = response[2]
          this.answer4 = response[3]
          break
        default:
          break
      }
    })
  }

  ngOnDestroy() {
    this.form.reset()
    this.onDestroy$.next()
    this.onDestroy$.complete()
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

  private getPokemonData(
    data: any,
    excludeNum: number,
    isEvolution: boolean,
    isMain: boolean
  ) {
    var min = this.range[0]
    var max = this.range[1]

    var number = Math.floor(Math.random() * (max + 1 - min)) + min
    if (isMain) {
      var list = this.answerService.getAnswer()
      if (list.length > 0) {
        for (var i = 0; i < list.length; i++) {
          if (list[i]['no'] == data[number - 1]['no']) {
            // 既に出題されたポケモンは取り直し
            return this.getPokemonData(data, excludeNum, isEvolution, isMain)
          }
        }
      }
    }
    if (data[number - 1]['no'] == excludeNum) {
      // 問題のポケモンは除外して取り直し
      return this.getPokemonData(data, excludeNum, isEvolution, isMain)
    }
    if (isEvolution && data[number - 1]['evolutions'].length === 0) {
      // 進化系問題で進化先のない場合は取り直し
      return this.getPokemonData(data, excludeNum, isEvolution, isMain)
    }
    if (data[number - 1]['form'] !== '') {
      // アローラのすがたは取り直し
      return this.getPokemonData(data, excludeNum, isEvolution, isMain)
    }
    if (data[number - 1]['isMegaEvolution']) {
      // メガシンカ後も取り直し
      return this.getPokemonData(data, excludeNum, isEvolution, isMain)
    }
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
            return this.getPokemonData(data, excludeNum, isEvolution, isMain)
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
            return this.getPokemonData(data, excludeNum, isEvolution, isMain)
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
      '/assets/images/pokemon/picture/' + this.getZeroPadding(number) + '.png'
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
    var min = this.level[0]
    var max = this.level[1]
    // 1: 名前当て
    // 2: タイプ当て
    // 3: 新化先当て
    // 4: 特性当て
    // 5: 弱点当て

    var typeNum = Math.floor(Math.random() * (max + 1 - min)) + min
    if (typeNum !== 3) {
      return typeNum
    } else {
      if (
        target['evolutions'].length > 0 &&
        target['evolutions'][0] < this.range[1]
      ) {
        return typeNum
      } else {
        return this.getQuizType(target)
      }
    }
  }

  private getZeroPadding(number) {
    return ('000' + number).slice(-3)
  }

  private getAnswer(target, typeNum, weaknessList) {
    var dummy1 = null
    var dummy2 = null
    var dummy3 = null
    if (typeNum === 5) {
      console.log(weaknessList)
      this.weaknessAnswer =
        weaknessList[Math.floor(Math.random() * weaknessList.length)]
      console.log(this.weaknessAnswer)
      dummy1 = this.getAnswerType(weaknessList, null, null)
      dummy2 = this.getAnswerType(weaknessList, dummy1, null)
      dummy3 = this.getAnswerType(weaknessList, dummy1, dummy2)
      this.answerList$.next([this.weaknessAnswer, dummy1, dummy2, dummy3])
    } else {
      this.data.subscribe(json => {
        dummy1 = this.getPokemonData(json, target['no'], typeNum === 3, false)
        dummy2 = this.getPokemonData(json, target['no'], typeNum === 3, false)
        dummy3 = this.getPokemonData(json, target['no'], typeNum === 3, false)
        this.checkAnswers(target, dummy1, dummy2, dummy3, typeNum)
      })
    }
  }

  private checkAnswers(target, dummy1, dummy2, dummy3, typeNum) {
    switch (typeNum) {
      case 1:
        if (
          target['name'] === dummy1['name'] ||
          target['name'] === dummy2['name'] ||
          target['name'] === dummy3['name'] ||
          dummy1['name'] === dummy2['name'] ||
          dummy1['name'] === dummy3['name'] ||
          dummy2['name'] === dummy3['name']
        ) {
          this.getAnswer(target, typeNum, null)
        } else {
          this.answerList$.next([target, dummy1, dummy2, dummy3])
        }
        break
      case 2:
        if (
          this.compareList(target['types'], dummy1['types']) ||
          this.compareList(target['types'], dummy2['types']) ||
          this.compareList(target['types'], dummy3['types']) ||
          this.compareList(dummy1['types'], dummy2['types']) ||
          this.compareList(dummy1['types'], dummy3['types']) ||
          this.compareList(dummy2['types'], dummy3['types'])
        ) {
          this.getAnswer(target, typeNum, null)
        } else {
          this.answerList$.next([target, dummy1, dummy2, dummy3])
        }
        break
      case 3:
        if (
          this.compareList(target['evolutions'], dummy1['evolutions']) ||
          this.compareList(target['evolutions'], dummy2['evolutions']) ||
          this.compareList(target['evolutions'], dummy3['evolutions']) ||
          this.compareList(dummy1['evolutions'], dummy2['evolutions']) ||
          this.compareList(dummy1['evolutions'], dummy3['evolutions']) ||
          this.compareList(dummy2['evolutions'], dummy3['evolutions'])
        ) {
          this.getAnswer(target, typeNum, null)
        } else {
          this.answerList$.next([target, dummy1, dummy2, dummy3])
        }
        break
      case 4:
        if (
          this.compareList(target['abilities'], dummy1['abilities']) ||
          this.compareList(target['abilities'], dummy2['abilities']) ||
          this.compareList(target['abilities'], dummy3['abilities']) ||
          this.compareList(dummy1['abilities'], dummy2['abilities']) ||
          this.compareList(dummy1['abilities'], dummy3['abilities']) ||
          this.compareList(dummy2['abilities'], dummy3['abilities'])
        ) {
          this.getAnswer(target, typeNum, null)
        } else {
          this.answerList$.next([target, dummy1, dummy2, dummy3])
        }
        break
    }
  }

  private compareList(list1: any[], list2: any[]): boolean {
    if (list1.length !== list2.length) {
      return false
    }
    if (list1[0] !== list2[0]) {
      return false
    }
    if (list1.length > 0 && list2.length > 0) {
      if (list1[1] !== list2[1]) {
        return false
      }
    }
    return true
  }

  private getEvolution(data: any[], base: any) {
    const result = data.filter(target => {
      return target['no'] == base['evolutions'][0]
    })
    return result
  }

  register(choice: string) {
    var correctAnswer = null
    switch (this.quizType) {
      case 1:
        correctAnswer = this.target['name']
        break
      case 2:
        correctAnswer = this.target['types']
        break
      case 3:
        correctAnswer = this.target['evolutions']
        break
      case 4:
        correctAnswer = this.target['abilities']
      case 5:
        correctAnswer = this.weaknessAnswer
        break
    }
    this.confirmService
      .openResultModal(choice === correctAnswer)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(result => {
        this.spinner.show()
      })
    this.answerService.addAnswer(
      this.target,
      this.quizType,
      choice,
      correctAnswer,
      this.imageUrl
    )
    this.count += 1
    this.resetAnswer()
    this.getNext()
  }

  private getNext() {
    this.readFlag = false
    if (this.count > this.maxCount) {
      this.spinner.show()
      this.answerService
        .createAnswer({
          userId: 'user1',
          range: this.range,
          level: this.level,
          answers: this.answerService.getAnswer()
        })
        .subscribe(res => {
          console.log(res)
        })
      this.router.navigate(['/result'])
    } else {
      this.data.subscribe(json => {
        this.pokemonData = json
        var pokemon = this.getPokemonData(json, 0, false, true)
        this.quizType = this.getQuizType(pokemon)
        this.question = QUESTIONS[this.quizType].value
        this.getPokemonImage(pokemon['no'])
        this.getAnswer(
          pokemon,
          this.quizType,
          this.getWeakness(pokemon['types'])
        )
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
          status: pokemon['status'],
          weakness: this.getWeakness(pokemon['types'])
        }
        setTimeout(() => {
          this.spinner.hide()
          this.readFlag = true
        }, 1000)
      })
    }
  }

  private resetAnswer() {
    this.answer1 = ''
    this.answer2 = ''
    this.answer3 = ''
    this.answer4 = ''
  }

  reload() {
    this.data = this.dataService.import()
    this.answerService.clearList()
    this.adventureFlag = this.settingService.getAdventure()
    if (this.adventureFlag) {
      this.settingService.setAdventureSetting(
        this.settingService.getAdventureCount()
      )
    }
    this.range = this.settingService.getRange()
    this.level = this.settingService.getLevel()
    this.maxCount = this.settingService.getQuizCount()
    this.ngOnInit()
  }

  private getWeakness(types: any) {
    for (var require of WEAKNESS_LIST) {
      if (types.length === 1) {
        if (types[0] == require.types[0]) {
          return require.weakness.single
        }
      } else {
        if (types.length > 1 && require.types.length > 1) {
          if (
            (types[0] == require.types[0] && types[1] == require.types[1]) ||
            (types[0] == require.types[1] && types[1] == require.types[0])
          ) {
            if (require.weakness.double.length > 1) {
              return require.weakness.double
            }
            return require.weakness.single
          }
        }
      }
      continue
    }
    console.log('no match: ')
    console.log(types)
    return null
  }

  private getAnswerType(weaknessList, dummy1, dummy2) {
    var answer = TYPES[Math.floor(Math.random() * TYPES.length)]
    const result = weaknessList.find(weakness => weakness === answer)
    if (
      result ||
      (dummy1 && answer === dummy1) ||
      (dummy2 && answer === dummy2)
    ) {
      return this.getAnswerType(weaknessList, dummy1, dummy2)
    }
    return answer
  }
}

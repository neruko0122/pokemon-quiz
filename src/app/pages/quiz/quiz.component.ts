import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { DataService } from 'src/app/shared/services/data.service'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  form: FormGroup
  data: any
  count = 0
  inputClass = 'form-control col-sm-9'
  labelClass = 'col-sm-3 col-form-label col-form-label-sm'
  formGroupClass = 'form-group row align-items-center'

  constructor(
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder
  ) {
    this.data = this.dataService.import()
  }

  ngOnInit(): void {
    this.buildForm()
    this.data.subscribe(json => {
      var target = this.randomGet(json)
      console.log(this.count)
      console.log(target)
      console.log(target['name'])
      this.form.patchValue({
        number: target['no'],
        name: target['name'],
        types: target['types'],
        abilities: target['abilities'],
        hiddenAbilities: target['hiddenAbilities'],
        status: target['status']
      })
    })
  }

  private buildForm(): void {
    this.form = this.fb.group({
      number: [null],
      name: [null],
      types: [null],
      abilities: [null],
      hiddenAbilities: [null],
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

  get status(): FormControl {
    return this.form.get('status') as FormControl
  }

  private randomGet(data: any) {
    var min = 1
    var max = 151

    var number = Math.floor(Math.random() * (max + 1 - min)) + min
    if (data[number - 1]['forms'] == '') {
      // アローラのすがたは取り直し
      return this.randomGet(data)
    } else if (data[number - 1]['isMegaEvolution']) {
      // メガシンカ後も取り直し
      return this.randomGet(data)
    } else {
      return data[number - 1]
    }
  }

  register(choice: string) {
    console.log(choice)
    this.count += 1
    this.router.navigate['/quiz']
  }
}

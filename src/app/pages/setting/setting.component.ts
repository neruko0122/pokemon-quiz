import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

import { POKEMON_RANGES } from './../../shared/constants/setting'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  form: FormGroup
  pokemonRanges = POKEMON_RANGES
  inputClass = 'form-control col-sm-9'
  labelClass = 'col-sm-3 col-form-label col-form-label-sm'
  formGroupClass = 'form-group row align-items-center'

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.buildForm()
    console.log(this.pokemonRanges)
  }

  private buildForm(): void {
    this.form = this.fb.group({
      pokemonRange: [null]
    })
  }

  get pokemonRange(): FormControl {
    return this.form.get('pokemonRange') as FormControl
  }

  rangeChange(value) {
    console.log(value)
  }

  start() {
    this.router.navigate(['/quiz'])
  }
}

// No.1-151   カントー
// No.152-251 ジョウト
// No.252-386 ホウエン
// No.387-494 シンオウ
// No.495-649 イッシュ
// No.650-807 カロス

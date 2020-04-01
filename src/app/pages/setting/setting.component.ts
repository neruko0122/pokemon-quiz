import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { SettingService } from 'src/app/shared/services/setting.service'

import { LEVELS, POKEMON_RANGES } from './../../shared/constants/setting'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  form: FormGroup
  pokemonRanges = POKEMON_RANGES
  levels = LEVELS
  inputClass = 'form-control col-sm-9'
  labelClass = 'col-sm-3 col-form-label col-form-label-sm'
  formGroupClass = 'form-group row align-items-center'

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private settingService: SettingService
  ) {}

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm(): void {
    this.form = this.fb.group({
      pokemonRange: [null, [Validators.required]],
      level: [null, [Validators.required]]
    })
  }

  get pokemonRange(): FormControl {
    return this.form.get('pokemonRange') as FormControl
  }

  get level(): FormControl {
    return this.form.get('level') as FormControl
  }

  rangeChange(value) {
    this.settingService.setRange(value)
  }

  levelChange(value) {
    this.settingService.setLevel(value)
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

// デオキシス
// ミノムッチ
// ギラティナ

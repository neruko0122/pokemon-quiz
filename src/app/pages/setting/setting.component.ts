import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { SettingService } from 'src/app/shared/services/setting.service'

import {
  LEVEL_ELEMENTARY,
  LEVELS,
  POKEMON_RANGES,
  RANGE_KANTO
} from './../../shared/constants/setting'

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
    private settingService: SettingService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.buildForm()
    this.rangeChange(RANGE_KANTO)
    this.levelChange(LEVEL_ELEMENTARY)
    this.form.patchValue({
      pokemonRange: [1, 151],
      level: [1, 2],
      count: 10
    })
  }

  private buildForm(): void {
    this.form = this.fb.group({
      pokemonRange: [null, [Validators.required]],
      level: [null, [Validators.required]],
      count: [null, [Validators.required]]
    })
  }

  get pokemonRange(): FormControl {
    return this.form.get('pokemonRange') as FormControl
  }

  get level(): FormControl {
    return this.form.get('level') as FormControl
  }

  get count(): FormControl {
    return this.form.get('count') as FormControl
  }

  rangeChange(value) {
    this.settingService.setRange(value)
  }

  levelChange(value) {
    this.settingService.setLevel(value)
  }

  countChange(value: number) {
    this.settingService.setQuizCount(value)
  }

  start() {
    this.spinner.show()
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

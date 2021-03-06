import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { Subject } from 'rxjs'
import { SettingService } from 'src/app/shared/services/setting.service'

import {
  COUNT_LIST,
  LEVEL_ADVANCED,
  LEVEL_ELEMENTARY,
  LEVEL_INTERMEDIATE,
  LEVEL_WEAKNESS,
  LEVELS,
  POKEMON_RANGES,
  RANGE_HOENN,
  RANGE_ISSHU,
  RANGE_JOHTO,
  RANGE_KALOS,
  RANGE_KANTO_ONLY,
  RANGE_SINNOH
} from './../../shared/constants/setting'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit, OnDestroy {
  form: FormGroup
  pokemonRanges = POKEMON_RANGES
  levels = LEVELS
  countList = COUNT_LIST
  inputClass = 'form-control col-sm-9'
  labelClass = 'col-sm-3 col-form-label col-form-label-sm'
  formGroupClass = 'form-group row align-items-center'
  onDestroy$ = new Subject()

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private settingService: SettingService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.hide()
    this.buildForm()
    this.rangeChange(RANGE_KANTO_ONLY)
    this.levelChange(LEVEL_ELEMENTARY)
    this.form.patchValue({
      pokemonRange: this.convertRange(this.settingService.getRange()),
      level: this.convertLevel(this.settingService.getLevel()),
      count: this.settingService.getQuizCount()
    })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next()
    this.onDestroy$.complete()
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

  private convertRange(range: any[]) {
    switch (range[1]) {
      case 151:
        return RANGE_KANTO_ONLY
      case 251:
        return RANGE_JOHTO
      case 368:
        return RANGE_HOENN
      case 494:
        return RANGE_SINNOH
      case 649:
        return RANGE_ISSHU
      case 806:
        return RANGE_KALOS
    }
  }

  private convertLevel(level: any[]) {
    switch (level[1]) {
      case 2:
        return LEVEL_ELEMENTARY
      case 3:
        return LEVEL_INTERMEDIATE
      case 4:
        return LEVEL_ADVANCED
      case 5:
        return LEVEL_WEAKNESS
    }
  }
}

// No.1-151   カントー
// No.152-251 ジョウト
// No.252-386 ホウエン
// No.387-494 シンオウ
// No.495-649 イッシュ
// No.650-806 カロス
// No.807 デラオラはアイコンなし

// デオキシス
// ミノムッチ
// ギラティナ

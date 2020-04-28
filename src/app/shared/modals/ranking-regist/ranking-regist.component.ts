import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { BsModalRef } from 'ngx-bootstrap'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-ranking-regist',
  templateUrl: './ranking-regist.component.html',
  styleUrls: ['./ranking-regist.component.scss']
})
export class RankingRegistComponent implements OnInit, OnDestroy {
  form: FormGroup
  onDestroy$ = new Subject()
  inputClass = 'form-control col-sm-8 col-xs-7'
  labelClass = 'col-sm-2 col-xs-3 col-form-label col-form-label-sm'
  formGroupClass = 'form-group row align-items-center'
  public result = new Subject<string>()

  constructor(private fb: FormBuilder, private bsModalRef: BsModalRef) {}

  ngOnInit(): void {
    this.buildForm()
  }

  ngOnDestroy() {
    this.form.reset()
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name: [null]
    })
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl
  }

  register() {
    this.result.next(this.name.value)
    this.bsModalRef.hide()
  }
}

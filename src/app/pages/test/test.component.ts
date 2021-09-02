import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  form!: FormGroup
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm()
    this.form.patchValue({
      id: '1',
      name: 'フシギダネ' ,
      address: '住所',
      type: 'くさ'
    })
  }

  private buildForm(): void {
    this.form = this.fb.group({
      id: [null],
      name: [null],
      address: [null],
      type: [null]
  })
  }

    get id(): FormControl {
      return this.form.get('id') as FormControl
    }

    get name(): FormControl {
      return this.form.get('name') as FormControl
    }

    get address(): FormControl {
      return this.form.get('address') as FormControl
    }

    get type(): FormControl {
      return this.form.get('type') as FormControl
    }

    confirm() {
      console.log("### id: " + this.id.value)
      console.log("### name: " + this.name.value)
      console.log("### address: " + this.address.value)
      console.log("### type: " + this.type.value)
    }
}

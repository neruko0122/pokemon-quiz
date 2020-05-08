import { Component, OnInit } from '@angular/core'
import { BsModalRef } from 'ngx-bootstrap'

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {
  imageUrl
  line
  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.bsModalRef.hide()
    }, 5000)
  }
}

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {}

  start() {
    this.spinner.show()
    this.router.navigate(['/quiz'])
  }

  setting() {
    this.router.navigate(['/setting'])
  }
}

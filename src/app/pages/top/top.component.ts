import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  start() {
    // TODO: 設定画面に遷移で、問題範囲を指定
    this.router.navigate(['/quiz'])
  }
}

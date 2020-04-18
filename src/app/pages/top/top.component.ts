import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { UsersService } from 'src/app/shared/services/users.service'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private usersService: UsersService
  ) {}

  response: any

  ngOnInit(): void {}

  start() {
    this.spinner.show()
    this.router.navigate(['/quiz'])
  }

  setting() {
    this.router.navigate(['/setting'])
  }

  find() {
    this.usersService.getUser().subscribe(res => {
      this.response = res.json()
      console.log(this.response)
    })
  }
}

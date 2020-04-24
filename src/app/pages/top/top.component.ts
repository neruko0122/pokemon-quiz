import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { SettingService } from 'src/app/shared/services/setting.service'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private settingService: SettingService
  ) {}

  ngOnInit(): void {}

  start() {
    this.spinner.show()
    this.router.navigate(['/quiz'])
  }

  adventureStart() {
    this.spinner.show()
    this.settingService.setAdventure(true)
    this.router.navigate(['/map'])
  }

  setting() {
    this.router.navigate(['/setting'])
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { Subject } from 'rxjs'
import { SettingService } from 'src/app/shared/services/setting.service'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject()

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private settingService: SettingService
  ) {}

  ngOnInit(): void {
    this.settingService.setAdventure(false)
  }

  ngOnDestroy(): void {
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }

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

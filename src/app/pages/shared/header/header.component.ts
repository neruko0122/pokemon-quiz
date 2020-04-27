import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { SettingService } from 'src/app/shared/services/setting.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  range!: string
  level!: string
  dispSettingSubscription: Subscription
  constructor(private settingService: SettingService) {}

  ngOnInit(): void {
    this.dispSettingSubscription = this.settingService.dispLevelSource$.subscribe(
      level => {
        this.level = level
      }
    )
    this.dispSettingSubscription = this.settingService.dispRangeSource$.subscribe(
      range => {
        this.range = range
      }
    )
  }
}

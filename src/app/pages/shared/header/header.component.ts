import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { LEVEL_ELEMENTARY, RANGE_KANTO_ONLY } from 'src/app/shared/constants'
import { SettingService } from 'src/app/shared/services/setting.service'

import { ADVENTURE_LIST } from './../../../shared/constants/setting'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  range: string = RANGE_KANTO_ONLY
  level: string = LEVEL_ELEMENTARY
  maxCount: number = ADVENTURE_LIST.length
  count: number = 1
  adventure = false
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
    this.dispSettingSubscription = this.settingService.dispAdventureCountSource$.subscribe(
      count => {
        this.count = count
      }
    )
    this.dispSettingSubscription = this.settingService.adventureSource$.subscribe(
      adventure => {
        this.adventure = adventure
      }
    )
  }
}

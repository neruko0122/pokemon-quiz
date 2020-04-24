import { Component, OnInit } from '@angular/core'
import { SettingService } from 'src/app/shared/services/setting.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  range!: string
  level!: string
  constructor(private settingService: SettingService) {}

  ngOnInit(): void {
    this.range = this.settingService.getRangeString()
    this.level = this.settingService.getLevelString()
  }
}

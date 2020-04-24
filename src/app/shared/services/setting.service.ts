import { Injectable } from '@angular/core'

import {
  LEVEL_ADVANCED,
  LEVEL_ELEMENTARY,
  LEVEL_INTERMEDIATE,
  RANGE_HOENN,
  RANGE_HOENN_ONLY,
  RANGE_ISSHU,
  RANGE_ISSHU_ONLY,
  RANGE_JOHTO,
  RANGE_JOHTO_ONLY,
  RANGE_KALOS,
  RANGE_KALOS_ONLY,
  RANGE_KANTO_ONLY,
  RANGE_SHINNOH_ONLY,
  RANGE_SINNOH
} from '../constants/setting'
import { ADVENTURE_LIST } from './../constants/setting'

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  range = [1, 151]
  rangeString: string = ''
  level = [1, 2]
  levelString: string = ''
  quizCount = 10
  adventure = false
  adventureCount = 0
  adventureList = ADVENTURE_LIST
  constructor() {}

  setRange(range: string) {
    this.rangeString = range
    switch (range) {
      case RANGE_KANTO_ONLY:
        this.range = [1, 151]
        break
      case RANGE_JOHTO:
        this.range = [1, 251]
        break
      case RANGE_HOENN:
        this.range = [1, 368]
        break
      case RANGE_SINNOH:
        this.range = [1, 494]
        break
      case RANGE_ISSHU:
        this.range = [1, 649]
        break
      case RANGE_KALOS:
        this.range = [1, 806]
        break
      case RANGE_JOHTO_ONLY:
        this.range = [152, 251]
        break
      case RANGE_HOENN_ONLY:
        this.range = [252, 368]
        break
      case RANGE_SHINNOH_ONLY:
        this.range = [369, 494]
        break
      case RANGE_ISSHU_ONLY:
        this.range = [495, 649]
        break
      case RANGE_KALOS_ONLY:
        this.range = [650, 806]
        break
    }
  }

  getRange() {
    return this.range
  }

  setLevel(level: string) {
    this.levelString = level
    switch (level) {
      case LEVEL_ELEMENTARY:
        this.level = [1, 2]
        break
      case LEVEL_INTERMEDIATE:
        this.level = [1, 3]
        break
      case LEVEL_ADVANCED:
        this.level = [1, 4]
        break
    }
  }

  getLevel() {
    return this.level
  }

  setQuizCount(count: number) {
    this.quizCount = count
  }

  getQuizCount() {
    return this.quizCount
  }

  setAdventure(flag: boolean) {
    this.adventure = flag
  }

  getAdventure() {
    return this.adventure
  }

  setAdventureSetting(count: number) {
    this.setLevel(this.adventureList[count].level)
    this.setRange(this.adventureList[count].range)
    this.setQuizCount(this.adventureList[count].quizCount)
  }

  setAdventureCount() {
    this.adventureCount++
  }

  getAdventureCount() {
    return this.adventureCount
  }

  getRangeString() {
    return this.rangeString
  }

  getLevelString() {
    return this.levelString
  }
}

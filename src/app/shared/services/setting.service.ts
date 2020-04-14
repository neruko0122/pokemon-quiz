import { Injectable } from '@angular/core'

import {
  LEVEL_ADVANCED,
  LEVEL_ELEMENTARY,
  LEVEL_INTERMEDIATE,
  RANGE_HOENN,
  RANGE_ISSHU,
  RANGE_JOHTO,
  RANGE_KALOS,
  RANGE_KANTO,
  RANGE_SINNOH
} from '../constants/setting'

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  pokemonRange = [1, 151]
  level = [1, 2]
  quizCount = 10
  constructor() {}

  setRange(range: string) {
    switch (range) {
      case RANGE_KANTO:
        this.pokemonRange = [1, 151]
        break
      case RANGE_JOHTO:
        this.pokemonRange = [1, 251]
        break
      case RANGE_HOENN:
        this.pokemonRange = [1, 368]
        break
      case RANGE_SINNOH:
        this.pokemonRange = [1, 494]
        break
      case RANGE_ISSHU:
        this.pokemonRange = [1, 649]
        break
      case RANGE_KALOS:
        this.pokemonRange = [1, 806]
        break
    }
  }

  getRange() {
    return this.pokemonRange
  }

  setLevel(level: string) {
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
}

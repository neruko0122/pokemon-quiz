import { Injectable } from '@angular/core'

import {
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
        this.pokemonRange = [1, 807]
        break
    }
  }

  getRange() {
    return this.pokemonRange
  }
}

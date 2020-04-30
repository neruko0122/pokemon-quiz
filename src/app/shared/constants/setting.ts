export const RANGE_KANTO_ONLY = 'カントー'
export const RANGE_JOHTO = 'カントー～ジョウトまで'
export const RANGE_HOENN = 'カントー～ホウエンまで'
export const RANGE_SINNOH = 'カントー～シンオウまで'
export const RANGE_ISSHU = 'カントー～イッシュまで'
export const RANGE_KALOS = 'カントー～カロスまで'
export const RANGE_JOHTO_ONLY = 'ジョウト'
export const RANGE_HOENN_ONLY = 'ホウエン'
export const RANGE_SHINNOH_ONLY = 'シンオウ'
export const RANGE_ISSHU_ONLY = 'イッシュ'
export const RANGE_KALOS_ONLY = 'カロス'
export const POKEMON_RANGES: any[] = [
  RANGE_KANTO_ONLY,
  RANGE_JOHTO,
  RANGE_HOENN,
  RANGE_SINNOH,
  RANGE_ISSHU,
  RANGE_KALOS
]

export const LEVEL_ELEMENTARY = 'なまえ/タイプ'
export const LEVEL_INTERMEDIATE = 'なまえ/タイプ/しんか'
export const LEVEL_ADVANCED = 'なまえ/タイプ/しんか/とくせい'
export const LEVEL_UPPER_ADVANCED = 'ひみつ'

export const LEVELS: any[] = [
  LEVEL_ELEMENTARY,
  LEVEL_INTERMEDIATE,
  LEVEL_ADVANCED
]

export const COUNT_LIST = [5, 10, 15, 20, 25]

export const ADVENTURE_LIST = [
  {
    // カントー 初級
    range: RANGE_KANTO_ONLY,
    level: LEVEL_ELEMENTARY,
    quizCount: 10
  },
  {
    // カントー 中級
    range: RANGE_KANTO_ONLY,
    level: LEVEL_INTERMEDIATE,
    quizCount: 10
  },
  {
    // カントー 上級
    range: RANGE_KANTO_ONLY,
    level: LEVEL_ADVANCED,
    quizCount: 10
  },
  {
    // ジョウト 初級
    range: RANGE_JOHTO_ONLY,
    level: LEVEL_ELEMENTARY,
    quizCount: 10
  },
  {
    // ジョウト 中級
    range: RANGE_JOHTO_ONLY,
    level: LEVEL_INTERMEDIATE,
    quizCount: 10
  },
  {
    // ジョウト 上級
    range: RANGE_JOHTO_ONLY,
    level: LEVEL_ADVANCED,
    quizCount: 10
  },
  {
    // ホウエン 初級
    range: RANGE_HOENN_ONLY,
    level: LEVEL_ELEMENTARY,
    quizCount: 10
  },
  {
    // ホウエン 中級
    range: RANGE_HOENN_ONLY,
    level: LEVEL_INTERMEDIATE,
    quizCount: 10
  },
  {
    // ホウエン 上級
    range: RANGE_HOENN_ONLY,
    level: LEVEL_ADVANCED,
    quizCount: 10
  }
]

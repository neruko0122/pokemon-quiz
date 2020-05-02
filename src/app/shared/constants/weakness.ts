export const WEAKNESS_LIST = [
  {
    types: ['ノーマル'],
    weakness: {
      single: ['かくとう'],
      double: []
    },
    strength: {
      single: [],
      double: [],
      noEffect: ['ゴースト']
    },
    skills: []
  },
  {
    types: ['ほのお'],
    weakness: {
      single: ['みず', 'じめん', 'いわ'],
      double: []
    },
    strength: {
      single: ['ほのお', 'くさ', 'こおり', 'むし', 'はがね', 'フェアリー'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['みず'],
    weakness: {
      single: ['でんき', 'くさ'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'こおり', 'はがね'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['でんき'],
    weakness: {
      single: ['じめん'],
      double: []
    },
    strength: {
      single: ['でんき', 'ひこう', 'はがね'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['くさ'],
    weakness: {
      single: ['ほのお', 'こおり', 'どく', 'ひこう', 'むし'],
      double: []
    },
    strength: {
      single: ['みず', 'でんき', 'くさ', 'じめん'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['こおり'],
    weakness: {
      single: ['ほのお', 'かくとう', 'いわ', 'はがね'],
      double: []
    },
    strength: {
      single: ['こおり'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['かくとう'],
    weakness: {
      single: ['ひこう', 'エスパー', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['むし', 'いわ', 'あく'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['どく'],
    weakness: {
      single: ['じめん', 'エスパー'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'どく', 'むし', 'フェアリー'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['じめん'],
    weakness: {
      single: ['みず', 'くさ', 'こおり'],
      double: []
    },
    strength: {
      single: ['どく', 'いわ'],
      double: [],
      noEffect: ['でんき']
    },
    skills: []
  },
  {
    types: ['ひこう'],
    weakness: {
      single: ['でんき', 'こおり', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'むし'],
      double: [],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['エスパー'],
    weakness: {
      single: ['むし', 'ゴースト', 'あく'],
      double: [],
      noEffect: []
    },
    strength: {
      single: ['かくとう', 'エスパー'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['むし'],
    weakness: {
      single: ['ほのお', 'ひこう', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'じめん'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['いわ'],
    weakness: {
      single: ['みず', 'くさ', 'かくとう', 'じめん', 'はがね'],
      double: []
    },
    strength: {
      single: ['ノーマル', 'ほのお', 'どく', 'ひこう'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['ゴースト'],
    weakness: {
      single: ['エスパー', 'あく'],
      double: []
    },
    strength: {
      single: ['どく', 'むし'],
      double: [],
      noEffect: ['ノーマル', 'かくとう']
    },
    skills: []
  },
  {
    types: ['ドラゴン'],
    weakness: {
      single: ['こおり', 'ドラゴン', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'でんき', 'くさ'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['あく'],
    weakness: {
      single: ['かくとう', 'むし', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['ゴースト', 'あく'],
      double: [],
      noEffect: ['エスパー']
    },
    skills: []
  },
  {
    types: ['はがね'],
    weakness: {
      single: ['ほのお', 'かくとう', 'じめん'],
      double: [],
      noEffect: []
    },
    strength: {
      single: [
        'ノーマル',
        'くさ',
        'こおり',
        'ひこう',
        'エスパー',
        'むし',
        'いわ',
        'ドラゴン',
        'はがね',
        'フェアリー'
      ],
      double: [],
      noEffect: ['どく']
    },
    skills: []
  },
  {
    types: ['フェアリー'],
    weakness: {
      single: ['どく', 'はがね'],
      double: []
    },
    strength: {
      single: ['かくとう', 'むし', 'あく'],
      double: [],
      noEffect: ['ドラゴン']
    },
    skills: []
  },
  {
    types: ['ノーマル', 'ほのお'],
    weakness: {
      single: ['みず', 'かくとう', 'じめん', 'いわ'],
      double: []
    },
    strength: {
      single: ['ほのお', 'くさ', 'こおり', 'むし', 'はがね', 'フェアリー'],
      double: [],
      noEffect: ['ゴースト']
    },
    skills: []
  },
  {
    types: ['ノーマル', 'みず'],
    weakness: {
      single: ['でんき', 'くさ', 'かくとう'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'こおり', 'はがね'],
      double: [],
      noEffect: ['ゴースト']
    },
    skills: []
  },
  {
    types: ['ノーマル', 'でんき'],
    weakness: {
      single: ['かくとう', 'じめん'],
      double: []
    },
    strength: {
      single: ['でんき', 'ひこう', 'はがね'],
      double: [],
      noEffect: ['ゴースト']
    },
    skills: []
  },
  {
    types: ['ノーマル', 'くさ'],
    weakness: {
      single: ['ほのお', 'こおり', 'かくとう', 'どく', 'ひこう', 'むし'],
      double: []
    },
    strength: {
      single: ['みず', 'でんき', 'くさ', 'じめん'],
      double: [],
      noEffect: ['ゴースト']
    },
    skills: []
  },
  {
    types: ['ノーマル', 'かくとう'],
    weakness: {
      single: ['かくとう', 'ひこう', 'エスパー', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['むし', 'いわ', 'あく'],
      double: [],
      noEffect: ['ゴースト']
    },
    skills: []
  },
  {
    types: ['ノーマル', 'じめん'],
    weakness: {
      single: ['みず', 'くさ', 'こおり', 'かくとう'],
      double: []
    },
    strength: {
      single: ['どく', 'いわ'],
      double: [],
      noEffect: ['でんき', 'ゴースト']
    },
    skills: []
  },
  {
    types: ['ノーマル', 'ひこう'],
    weakness: {
      single: ['でんき', 'こおり', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'むし'],
      double: [],
      noEffect: ['じめん', 'ゴースト']
    },
    skills: []
  },
  {
    types: ['ノーマル', 'エスパー'],
    weakness: {
      single: ['むし', 'あく'],
      double: []
    },
    strength: {
      single: ['エスパー'],
      double: [],
      noEffect: ['ゴースト']
    },
    skills: []
  },
  {
    types: ['ノーマル', 'ドラゴン'],
    weakness: {
      single: ['こおり', 'かくとう', 'ドラゴン', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'でんき', 'くさ'],
      double: [],
      noEffect: ['ゴースト']
    },
    skills: []
  },
  {
    types: ['ノーマル', 'あく'],
    weakness: {
      single: ['むし', 'フェアリー'],
      double: ['かくとう']
    },
    strength: {
      single: ['あく'],
      double: [],
      noEffect: ['エスパー', 'ゴースト']
    },
    skills: []
  },
  {
    types: ['ノーマル', 'フェアリー'],
    weakness: {
      single: ['どく', 'はがね'],
      double: []
    },
    strength: {
      single: ['むし', 'あく'],
      double: [],
      noEffect: ['ドラゴン', 'ゴースト']
    },
    skills: []
  },
  {
    types: ['ほのお', 'みず'],
    weakness: {
      single: ['でんき', 'じめん', 'いわ'],
      double: []
    },
    strength: {
      single: ['むし', 'フェアリー'],
      double: ['ほのお', 'こおり', 'はがね'],
      noEffect: ['']
    },
    skills: []
  },
  {
    types: ['ほのお', 'でんき'],
    weakness: {
      single: ['みず', 'いわ'],
      double: ['じめん']
    },
    strength: {
      single: [
        'ほのお',
        'でんき',
        'くさ',
        'こおり',
        'ひこう',
        'むし',
        'フェアリー'
      ],
      double: ['はがね'],
      noEffect: ['']
    },
    skills: []
  },
  {
    types: ['ほのお', 'こおり'],
    weakness: {
      single: ['みず', 'かくとう', 'じめん'],
      double: ['いわ']
    },
    strength: {
      single: ['くさ', 'むし', 'フェアリー'],
      double: ['こおり'],
      noEffect: ['']
    },
    skills: []
  },
  {
    types: ['ほのお', 'かくとう'],
    weakness: {
      single: ['みず', 'じめん', 'ひこう', 'エスパー'],
      double: []
    },
    strength: {
      single: ['ほのお', 'くさ', 'こおり', 'あく', 'はがね'],
      double: ['むし'],
      noEffect: ['']
    },
    skills: []
  },
  {
    types: ['ほのお', 'どく'],
    weakness: {
      single: ['みず', 'エスパー', 'いわ'],
      double: ['じめん']
    },
    strength: {
      single: ['ほのお', 'こおり', 'かくとう', 'どく', 'はがね'],
      double: ['くさ', 'むし', 'フェアリー'],
      noEffect: ['']
    },
    skills: []
  },
  {
    types: ['ほのお', 'じめん'],
    weakness: {
      single: ['じめん'],
      double: ['みず']
    },
    strength: {
      single: ['ほのお', 'どく', 'むし', 'はがね', 'フェアリー'],
      double: [],
      noEffect: ['でんき']
    },
    skills: []
  },
  {
    types: ['ほのお', 'ひこう'],
    weakness: {
      single: ['みず', 'でんき'],
      double: ['いわ']
    },
    strength: {
      single: ['ほのお', 'かくとう', 'はがね', 'フェアリー'],
      double: ['くさ', 'むし'],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['ほのお', 'エスパー'],
    weakness: {
      single: ['みず', 'じめん', 'いわ', 'ゴースト', 'あく'],
      double: []
    },
    strength: {
      single: [
        'ほのお',
        'くさ',
        'こおり',
        'かくとう',
        'エスパー',
        'はがね',
        'フェアリー'
      ],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['ほのお', 'むし'],
    weakness: {
      single: ['みず', 'ひこう'],
      double: ['いわ']
    },
    strength: {
      single: ['こおり', 'かくとう', 'むし', 'はがね', 'フェアリー'],
      double: ['くさ'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['ほのお', 'いわ'],
    weakness: {
      single: ['かくとう', 'いわ'],
      double: ['みず', 'じめん']
    },
    strength: {
      single: ['ノーマル', 'こおり', 'どく', 'ひこう', 'むし', 'フェアリー'],
      double: ['ほのお'],
      noEffect: ['']
    },
    skills: []
  },
  {
    types: ['ほのお', 'ゴースト'],
    weakness: {
      single: ['みず', 'じめん', 'いわ', 'ゴースト', 'あく'],
      double: []
    },
    strength: {
      single: ['ほのお', 'くさ', 'こおり', 'どく', 'はがね', 'フェアリー'],
      double: ['むし'],
      noEffect: ['ノーマル', 'かくとう']
    },
    skills: []
  },
  {
    types: ['ほのお', 'ドラゴン'],
    weakness: {
      single: ['じめん', 'いわ', 'ドラゴン'],
      double: []
    },
    strength: {
      single: ['でんき', 'むし', 'はがね'],
      double: ['ほのお', 'くさ'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['ほのお', 'あく'],
    weakness: {
      single: ['みず', 'かくとう', 'じめん', 'いわ'],
      double: []
    },
    strength: {
      single: ['ほのお', 'くさ', 'こおり', 'ゴースト', 'あく', 'はがね'],
      double: [],
      noEffect: ['エスパー']
    },
    skills: []
  },
  {
    types: ['ほのお', 'はがね'],
    weakness: {
      single: ['みず', 'かくとう'],
      double: ['じめん']
    },
    strength: {
      single: ['ノーマル', 'ひこう', 'エスパー', 'ドラゴン'],
      double: ['くさ', 'こおり', 'むし', 'はがね', 'フェアリー'],
      noEffect: ['どく']
    },
    skills: []
  },
  {
    types: ['みず', 'でんき'],
    weakness: {
      single: ['くさ', 'じめん'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'こおり', 'ひこう'],
      double: ['はがね'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['みず', 'くさ'],
    weakness: {
      single: ['どく', 'ひこう', 'むし'],
      double: []
    },
    strength: {
      single: ['じめん', 'はがね'],
      double: ['みず'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['みず', 'こおり'],
    weakness: {
      single: ['でんき', 'くさ', 'かくとう', 'いわ'],
      double: []
    },
    strength: {
      single: ['ほのお'],
      double: ['こおり'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['みず', 'かくとう'],
    weakness: {
      single: ['でんき', 'くさ', 'ひこう', 'エスパー', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'こおり', 'むし', 'いわ', 'あく', 'はがね'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['みず', 'どく'],
    weakness: {
      single: ['でんき', 'じめん', 'エスパー'],
      double: []
    },
    strength: {
      single: [
        'ほのお',
        'みず',
        'こおり',
        'かくとう',
        'どく',
        'むし',
        'はがね',
        'フェアリー'
      ],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['みず', 'じめん'],
    weakness: {
      single: [],
      double: ['くさ']
    },
    strength: {
      single: ['ほのお', 'どく', 'いわ', 'はがね'],
      double: [],
      noEffect: ['でんき']
    },
    skills: []
  },
  {
    types: ['みず', 'ひこう'],
    weakness: {
      single: ['いわ'],
      double: ['でんき']
    },
    strength: {
      single: ['ほのお', 'みず', 'かくとう', 'むし', 'はがね'],
      double: ['じめん'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['みず', 'エスパー'],
    weakness: {
      single: ['でんき', 'くさ', 'むし', 'ゴースト', 'あく'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'こおり', 'かくとう', 'エスパー', 'はがね'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['みず', 'むし'],
    weakness: {
      single: ['でんき', 'ひこう', 'いわ'],
      double: []
    },
    strength: {
      single: ['みず', 'こおり', 'かくとう', 'じめん', 'はがね'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['みず', 'いわ'],
    weakness: {
      single: ['でんき', 'かくとう', 'じめん'],
      double: ['くさ']
    },
    strength: {
      single: ['ノーマル', 'こおり', 'どく', 'ひこう'],
      double: ['ほのお'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['みず', 'ゴースト'],
    weakness: {
      single: ['でんき', 'くさ', 'ゴースト', 'あく'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'こおり', 'どく', 'むし', 'はがね'],
      double: [],
      noEffect: ['ノーマル', 'かくとう']
    },
    skills: []
  },
  {
    types: ['みず', 'ドラゴン'],
    weakness: {
      single: ['ドラゴン', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['はがね'],
      double: ['ほのお', 'みず'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['みず', 'あく'],
    weakness: {
      single: ['でんき', 'くさ', 'かくとう', 'むし', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'こおり', 'ゴースト', 'あく', 'はがね'],
      double: [],
      noEffect: ['エスパー']
    },
    skills: []
  },
  {
    types: ['みず', 'はがね'],
    weakness: {
      single: ['でんき', 'かくとう', 'じめん'],
      double: []
    },
    strength: {
      single: [
        'ノーマル',
        'みず',
        'ひこう',
        'エスパー',
        'むし',
        'いわ',
        'ドラゴン',
        'フェアリー'
      ],
      double: ['こおり', 'はがね'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['みず', 'フェアリー'],
    weakness: {
      single: ['でんき', 'くさ', 'どく'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'こおり', 'かくとう', 'むし', 'あく'],
      double: [],
      noEffect: ['ドラゴン']
    },
    skills: []
  },
  {
    types: ['でんき', 'くさ'],
    weakness: {
      single: ['ほのお', 'こおり', 'どく', 'むし'],
      double: []
    },
    strength: {
      single: ['みず', 'くさ', 'はがね'],
      double: ['でんき'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['でんき', 'こおり'],
    weakness: {
      single: ['ほのお', 'かくとう', 'じめん', 'いわ'],
      double: []
    },
    strength: {
      single: ['でんき', 'こおり', 'ひこう'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['でんき', 'どく'],
    weakness: {
      single: ['エスパー'],
      double: ['じめん']
    },
    strength: {
      single: [
        'でんき',
        'くさ',
        'かくとう',
        'どく',
        'ひこう',
        'むし',
        'はがね',
        'フェアリー'
      ],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['でんき', 'じめん'],
    weakness: {
      single: ['みず', 'くさ', 'こおり', 'じめん'],
      double: []
    },
    strength: {
      single: ['どく', 'ひこう', 'いわ', 'はがね'],
      double: [],
      noEffect: ['でんき']
    },
    skills: []
  },
  {
    types: ['でんき', 'ひこう'],
    weakness: {
      single: ['こおり', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'ひこう', 'むし', 'はがね'],
      double: [],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['でんき', 'エスパー'],
    weakness: {
      single: ['じめん', 'むし', 'ゴースト', 'あく'],
      double: []
    },
    strength: {
      single: ['でんき', 'かくとう', 'ひこう', 'エスパー', 'はがね'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['でんき', 'むし'],
    weakness: {
      single: ['ほのお', 'いわ'],
      double: []
    },
    strength: {
      single: ['でんき', 'くさ', 'かくとう', 'はがね'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['でんき', 'いわ'],
    weakness: {
      single: ['みず', 'くさ', 'かくとう'],
      double: ['じめん']
    },
    strength: {
      single: ['ノーマル', 'ほのお', 'でんき', 'どく'],
      double: ['ひこう'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['でんき', 'ゴースト'],
    weakness: {
      single: ['じめん', 'ゴースト', 'あく'],
      double: []
    },
    strength: {
      single: ['でんき', 'どく', 'ひこう', 'むし', 'はがね'],
      double: [],
      noEffect: ['ノーマル', 'かくとう']
    },
    skills: []
  },
  {
    types: ['でんき', 'ドラゴン'],
    weakness: {
      single: ['こおり', 'じめん', 'ドラゴン', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'くさ', 'ひこう', 'はがね'],
      double: ['でんき'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['でんき', 'あく'],
    weakness: {
      single: ['かくとう', 'じめん', 'むし', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['でんき', 'ひこう', 'ゴースト', 'あく', 'はがね'],
      double: [],
      noEffect: ['エスパー']
    },
    skills: []
  },
  {
    types: ['でんき', 'はがね'],
    weakness: {
      single: ['ほのお', 'かくとう'],
      double: ['じめん']
    },
    strength: {
      single: [
        'ノーマル',
        'でんき',
        'くさ',
        'こおり',
        'エスパー',
        'むし',
        'いわ',
        'ドラゴン',
        'フェアリー'
      ],
      double: ['ひこう', 'はがね'],
      noEffect: ['どく']
    },
    skills: []
  },
  {
    types: ['でんき', 'フェアリー'],
    weakness: {
      single: ['どく', 'じめん'],
      double: []
    },
    strength: {
      single: ['でんき', 'かくとう', 'ひこう', 'むし', 'あく'],
      double: [],
      noEffect: ['ドラゴン']
    },
    skills: []
  },
  {
    types: ['くさ', 'こおり'],
    weakness: {
      single: ['かくとう', 'どく', 'ひこう', 'むし', 'いわ', 'はがね'],
      double: ['ほのお']
    },
    strength: {
      single: ['みず', 'でんき', 'くさ', 'じめん'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['くさ', 'かくとう'],
    weakness: {
      single: ['ほのお', 'こおり', 'どく', 'エスパー', 'フェアリー'],
      double: ['ひこう']
    },
    strength: {
      single: ['みず', 'でんき', 'くさ', 'じめん', 'いわ', 'あく'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['くさ', 'どく'],
    weakness: {
      single: ['ほのお', 'こおり', 'ひこう', 'エスパー'],
      double: []
    },
    strength: {
      single: ['みず', 'でんき', 'かくとう', 'フェアリー'],
      double: ['くさ'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['くさ', 'じめん'],
    weakness: {
      single: ['ほのお', 'ひこう', 'むし'],
      double: ['こおり']
    },
    strength: {
      single: ['じめん', 'いわ'],
      double: [],
      noEffect: ['でんき']
    },
    skills: []
  },
  {
    types: ['くさ', 'ひこう'],
    weakness: {
      single: ['ほのお', 'どく', 'ひこう', 'いわ'],
      double: ['こおり']
    },
    strength: {
      single: ['みず', 'かくとう'],
      double: ['くさ'],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['くさ', 'エスパー'],
    weakness: {
      single: ['ほのお', 'こおり', 'どく', 'ひこう', 'ゴースト', 'あく'],
      double: ['むし']
    },
    strength: {
      single: ['みず', 'でんき', 'くさ', 'かくとう', 'じめん', 'エスパー'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['くさ', 'むし'],
    weakness: {
      single: ['こおり', 'どく', 'むし', 'いわ'],
      double: ['ほのお', 'ひこう']
    },
    strength: {
      single: ['みず', 'でんき', 'かくとう'],
      double: ['くさ', 'じめん'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['くさ', 'いわ'],
    weakness: {
      single: ['こおり', 'かくとう', 'むし', 'はがね'],
      double: []
    },
    strength: {
      single: ['ノーマル', 'でんき'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['くさ', 'ゴースト'],
    weakness: {
      single: ['ほのお', 'こおり', 'ひこう', 'ゴースト', 'あく'],
      double: []
    },
    strength: {
      single: ['みず', 'でんき', 'くさ', 'じめん'],
      double: [],
      noEffect: ['ノーマル', 'かくとう']
    },
    skills: []
  },
  {
    types: ['くさ', 'ドラゴン'],
    weakness: {
      single: ['どく', 'ひこう', 'むし', 'ドラゴン', 'フェアリー'],
      double: ['こおり']
    },
    strength: {
      single: ['じめん'],
      double: ['みず', 'でんき', 'くさ'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['くさ', 'あく'],
    weakness: {
      single: ['ほのお', 'こおり', 'かくとう', 'どく', 'ひこう', 'フェアリー'],
      double: ['むし']
    },
    strength: {
      single: ['みず', 'でんき', 'くさ', 'じめん', 'ゴースト', 'あく'],
      double: [],
      noEffect: ['エスパー']
    },
    skills: []
  },
  {
    types: ['くさ', 'はがね'],
    weakness: {
      single: ['かくとう'],
      double: ['ほのお']
    },
    strength: {
      single: [
        'ノーマル',
        'みず',
        'でんき',
        'エスパー',
        'いわ',
        'ドラゴン',
        'はがね',
        'フェアリー'
      ],
      double: ['くさ'],
      noEffect: ['どく']
    },
    skills: []
  },
  {
    types: ['くさ', 'フェアリー'],
    weakness: {
      single: ['ほのお', 'こおり', 'ひこう', 'はがね'],
      double: ['どく']
    },
    strength: {
      single: ['みず', 'でんき', 'くさ', 'かくとう', 'じめん', 'あく'],
      double: [],
      noEffect: ['ドラゴン']
    },
    skills: []
  },
  {
    types: ['こおり', 'かくとう'],
    weakness: {
      single: [
        'ほのお',
        'かくとう',
        'ひこう',
        'エスパー',
        'はがね',
        'フェアリー'
      ],
      double: []
    },
    strength: {
      single: ['こおり', 'むし', 'あく'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['こおり', 'じめん'],
    weakness: {
      single: ['ほのお', 'みず', 'くさ', 'かくとう', 'はがね'],
      double: []
    },
    strength: {
      single: ['どく'],
      double: [],
      noEffect: ['でんき']
    },
    skills: []
  },
  {
    types: ['こおり', 'ひこう'],
    weakness: {
      single: ['ほのお', 'でんき', 'はがね'],
      double: ['いわ']
    },
    strength: {
      single: ['くさ', 'むし'],
      double: [],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['こおり', 'エスパー'],
    weakness: {
      single: ['ほのお', 'むし', 'いわ', 'ゴースト', 'あく', 'はがね'],
      double: []
    },
    strength: {
      single: ['こおり', 'エスパー'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['こおり', 'むし'],
    weakness: {
      single: ['ひこう', 'はがね'],
      double: ['ほのお', 'いわ']
    },
    strength: {
      single: ['くさ', 'こおり', 'じめん'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['こおり', 'いわ'],
    weakness: {
      single: ['みず', 'くさ', 'じめん', 'いわ'],
      double: ['かくとう', 'はがね']
    },
    strength: {
      single: ['ノーマル', 'こおり', 'どく', 'ひこう'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['こおり', 'ゴースト'],
    weakness: {
      single: ['ほのお', 'いわ', 'ゴースト', 'あく', 'はがね'],
      double: []
    },
    strength: {
      single: ['こおり', 'どく', 'むし'],
      double: [],
      noEffect: ['ノーマル', 'かくとう']
    },
    skills: []
  },
  {
    types: ['こおり', 'ドラゴン'],
    weakness: {
      single: ['かくとう', 'いわ', 'ドラゴン', 'はがね', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['みず', 'でんき', 'くさ'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['こおり', 'あく'],
    weakness: {
      single: ['ほのお', 'むし', 'いわ', 'はがね', 'フェアリー'],
      double: ['かくとう']
    },
    strength: {
      single: ['こおり', 'ゴースト', 'あく'],
      double: [],
      noEffect: ['エスパー']
    },
    skills: []
  },
  {
    types: ['こおり', 'はがね'],
    weakness: {
      single: ['じめん'],
      double: ['ほのお', 'かくとう']
    },
    strength: {
      single: [
        'ノーマル',
        'くさ',
        'ひこう',
        'エスパー',
        'むし',
        'ドラゴン',
        'フェアリー'
      ],
      double: ['こおり'],
      noEffect: ['どく']
    },
    skills: []
  },
  {
    types: ['こおり', 'フェアリー'],
    weakness: {
      single: ['ほのお', 'どく', 'いわ'],
      double: ['はがね']
    },
    strength: {
      single: ['こおり', 'むし', 'あく'],
      double: [],
      noEffect: ['ドラゴン']
    },
    skills: []
  },
  {
    types: ['かくとう', 'どく'],
    weakness: {
      single: ['じめん', 'ひこう'],
      double: ['エスパー']
    },
    strength: {
      single: ['くさ', 'かくとう', 'どく', 'いわ', 'あく'],
      double: ['むし'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['かくとう', 'ひこう'],
    weakness: {
      single: ['でんき', 'こおり', 'ひこう', 'エスパー', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'あく'],
      double: ['むし'],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['かくとう', 'エスパー'],
    weakness: {
      single: ['ひこう', 'ゴースト', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['かくとう', 'いわ'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['かくとう', 'むし'],
    weakness: {
      single: ['ほのお', 'エスパー', 'フェアリー'],
      double: ['ひこう']
    },
    strength: {
      single: ['くさ', 'かくとう', 'じめん', 'むし', 'あく'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['かくとう', 'いわ'],
    weakness: {
      single: [
        'みず',
        'くさ',
        'かくとう',
        'じめん',
        'エスパー',
        'はがね',
        'フェアリー'
      ],
      double: []
    },
    strength: {
      single: ['ノーマル', 'ほのお', 'どく', 'むし', 'いわ', 'あく'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['かくとう', 'ゴースト'],
    weakness: {
      single: ['ひこう', 'エスパー', 'ゴースト', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['どく', 'いわ'],
      double: ['むし'],
      noEffect: ['ノーマル', 'かくとう']
    },
    skills: []
  },
  {
    types: ['かくとう', 'ドラゴン'],
    weakness: {
      single: ['こおり', 'ひこう', 'エスパー', 'ドラゴン'],
      double: ['フェアリー']
    },
    strength: {
      single: ['ほのお', 'みず', 'でんき', 'くさ', 'むし', 'いわ', 'あく'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['かくとう', 'あく'],
    weakness: {
      single: ['かくとう', 'ひこう'],
      double: ['フェアリー']
    },
    strength: {
      single: ['いわ', 'ゴースト'],
      double: ['あく'],
      noEffect: ['エスパー']
    },
    skills: []
  },
  {
    types: ['かくとう', 'はがね'],
    weakness: {
      single: ['ほのお', 'かくとう', 'じめん'],
      double: []
    },
    strength: {
      single: ['ノーマル', 'くさ', 'こおり', 'ドラゴン', 'あく', 'はがね'],
      double: ['むし', 'いわ'],
      noEffect: ['どく']
    },
    skills: []
  },
  {
    types: ['どく', 'じめん'],
    weakness: {
      single: ['みず', 'こおり', 'じめん', 'エスパー'],
      double: []
    },
    strength: {
      single: ['かくとう', 'むし', 'いわ', 'フェアリー'],
      double: ['どく'],
      noEffect: ['でんき']
    },
    skills: []
  },
  {
    types: ['どく', 'ひこう'],
    weakness: {
      single: ['でんき', 'こおり', 'エスパー', 'いわ'],
      double: []
    },
    strength: {
      single: ['どく', 'フェアリー'],
      double: ['くさ', 'かくとう', 'むし'],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['どく', 'むし'],
    weakness: {
      single: ['ほのお', 'ひこう', 'エスパー', 'いわ'],
      double: []
    },
    strength: {
      single: ['どく', 'むし', 'フェアリー'],
      double: ['くさ', 'かくとう'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['どく', 'いわ'],
    weakness: {
      single: ['みず', 'エスパー', 'はがね'],
      double: ['じめん']
    },
    strength: {
      single: ['ノーマル', 'ほのお', 'ひこう', 'むし', 'フェアリー'],
      double: ['どく'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['どく', 'ゴースト'],
    weakness: {
      single: ['じめん', 'エスパー', 'ゴースト', 'あく'],
      double: []
    },
    strength: {
      single: ['くさ', 'フェアリー'],
      double: ['どく', 'むし'],
      noEffect: ['ノーマル', 'かくとう']
    },
    skills: []
  },
  {
    types: ['どく', 'ドラゴン'],
    weakness: {
      single: ['こおり', 'じめん', 'エスパー', 'ドラゴン'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'でんき', 'かくとう', 'どく', 'むし'],
      double: ['くさ'],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['どく', 'あく'],
    weakness: {
      single: ['じめん'],
      double: []
    },
    strength: {
      single: ['くさ', 'どく', 'ゴースト', 'あく'],
      double: [],
      noEffect: ['エスパー']
    },
    skills: []
  },
  {
    types: ['どく', 'フェアリー'],
    weakness: {
      single: ['じめん', 'エスパー', 'はがね'],
      double: []
    },
    strength: {
      single: ['くさ', 'あく', 'フェアリー'],
      double: ['かくとう', 'むし'],
      noEffect: ['ドラゴン']
    },
    skills: []
  },
  {
    types: ['じめん', 'ひこう'],
    weakness: {
      single: ['みず'],
      double: ['こおり']
    },
    strength: {
      single: ['かくとう', 'どく', 'むし'],
      double: [],
      noEffect: ['でんき', 'じめん']
    },
    skills: []
  },
  {
    types: ['じめん', 'エスパー'],
    weakness: {
      single: ['みず', 'くさ', 'こおり', 'むし', 'ゴースト', 'あく'],
      double: []
    },
    strength: {
      single: ['かくとう', 'どく', 'エスパー', 'いわ'],
      double: [],
      noEffect: ['でんき']
    },
    skills: []
  },
  {
    types: ['じめん', 'むし'],
    weakness: {
      single: ['ほのお', 'みず', 'こおり', 'ひこう'],
      double: []
    },
    strength: {
      single: ['かくとう', 'どく', 'じめん'],
      double: [],
      noEffect: ['でんき']
    },
    skills: []
  },
  {
    types: ['じめん', 'いわ'],
    weakness: {
      single: ['こおり', 'かくとう', 'じめん', 'はがね'],
      double: ['みず', 'くさ']
    },
    strength: {
      single: ['ノーマル', 'ほのお', 'ひこう', 'いわ'],
      double: ['どく'],
      noEffect: ['でんき']
    },
    skills: []
  },
  {
    types: ['じめん', 'ゴースト'],
    weakness: {
      single: ['みず', 'くさ', 'こおり', 'ゴースト', 'あく'],
      double: []
    },
    strength: {
      single: ['むし', 'いわ'],
      double: ['どく'],
      noEffect: ['ノーマル', 'でんき', 'かくとう']
    },
    skills: []
  },
  {
    types: ['じめん', 'ドラゴン'],
    weakness: {
      single: ['ドラゴン', 'フェアリー'],
      double: ['こおり']
    },
    strength: {
      single: ['ほのお', 'どく', 'いわ'],
      double: [],
      noEffect: ['でんき']
    },
    skills: []
  },
  {
    types: ['じめん', 'あく'],
    weakness: {
      single: ['みず', 'くさ', 'こおり', 'かくとう', 'むし', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['どく', 'いわ', 'ゴースト', 'あく'],
      double: [],
      noEffect: ['でんき', 'エスパー']
    },
    skills: []
  },
  {
    types: ['じめん', 'はがね'],
    weakness: {
      single: ['ほのお', 'みず', 'かくとう', 'じめん'],
      double: []
    },
    strength: {
      single: [
        'ノーマル',
        'ひこう',
        'エスパー',
        'むし',
        'ドラゴン',
        'はがね',
        'フェアリー'
      ],
      double: ['いわ'],
      noEffect: ['でんき', 'どく']
    },
    skills: []
  },
  {
    types: ['ひこう', 'エスパー'],
    weakness: {
      single: ['でんき', 'こおり', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'むし'],
      double: [],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['ひこう', 'むし'],
    weakness: {
      single: ['でんき', 'こおり', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'むし'],
      double: [],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['ひこう', 'いわ'],
    weakness: {
      single: ['でんき', 'こおり', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'むし'],
      double: [],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['ひこう', 'ゴースト'],
    weakness: {
      single: ['でんき', 'こおり', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'むし'],
      double: [],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['ひこう', 'ドラゴン'],
    weakness: {
      single: ['でんき', 'こおり', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'むし'],
      double: [],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['ひこう', 'あく'],
    weakness: {
      single: ['でんき', 'こおり', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'むし'],
      double: [],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['ひこう', 'はがね'],
    weakness: {
      single: ['でんき', 'こおり', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'むし'],
      double: [],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['ひこう', 'フェアリー'],
    weakness: {
      single: ['でんき', 'こおり', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'むし'],
      double: [],
      noEffect: ['じめん']
    },
    skills: []
  },
  {
    types: ['エスパー', 'むし'],
    weakness: {
      single: ['むし', 'ゴースト', 'あく'],
      double: [],
      noEffect: []
    },
    strength: {
      single: ['かくとう', 'エスパー'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['エスパー', 'いわ'],
    weakness: {
      single: ['むし', 'ゴースト', 'あく'],
      double: [],
      noEffect: []
    },
    strength: {
      single: ['かくとう', 'エスパー'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['エスパー', 'ゴースト'],
    weakness: {
      single: ['むし', 'ゴースト', 'あく'],
      double: [],
      noEffect: []
    },
    strength: {
      single: ['かくとう', 'エスパー'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['エスパー', 'ドラゴン'],
    weakness: {
      single: ['むし', 'ゴースト', 'あく'],
      double: [],
      noEffect: []
    },
    strength: {
      single: ['かくとう', 'エスパー'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['エスパー', 'あく'],
    weakness: {
      single: ['むし', 'ゴースト', 'あく'],
      double: [],
      noEffect: []
    },
    strength: {
      single: ['かくとう', 'エスパー'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['エスパー', 'はがね'],
    weakness: {
      single: ['むし', 'ゴースト', 'あく'],
      double: [],
      noEffect: []
    },
    strength: {
      single: ['かくとう', 'エスパー'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['エスパー', 'フェアリー'],
    weakness: {
      single: ['むし', 'ゴースト', 'あく'],
      double: [],
      noEffect: []
    },
    strength: {
      single: ['かくとう', 'エスパー'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['むし', 'いわ'],
    weakness: {
      single: ['ほのお', 'ひこう', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'じめん'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['むし', 'ゴースト'],
    weakness: {
      single: ['ほのお', 'ひこう', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'じめん'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['むし', 'はがね'],
    weakness: {
      single: ['ほのお', 'ひこう', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'じめん'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['むし', 'フェアリー'],
    weakness: {
      single: ['ほのお', 'ひこう', 'いわ'],
      double: []
    },
    strength: {
      single: ['くさ', 'かくとう', 'じめん'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['いわ', 'ドラゴン'],
    weakness: {
      single: ['みず', 'くさ', 'かくとう', 'じめん', 'はがね'],
      double: []
    },
    strength: {
      single: ['ノーマル', 'ほのお', 'どく', 'ひこう'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['いわ', 'あく'],
    weakness: {
      single: ['みず', 'くさ', 'かくとう', 'じめん', 'はがね'],
      double: []
    },
    strength: {
      single: ['ノーマル', 'ほのお', 'どく', 'ひこう'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['いわ', 'はがね'],
    weakness: {
      single: ['みず', 'くさ', 'かくとう', 'じめん', 'はがね'],
      double: []
    },
    strength: {
      single: ['ノーマル', 'ほのお', 'どく', 'ひこう'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['いわ', 'フェアリー'],
    weakness: {
      single: ['みず', 'くさ', 'かくとう', 'じめん', 'はがね'],
      double: []
    },
    strength: {
      single: ['ノーマル', 'ほのお', 'どく', 'ひこう'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['ゴースト', 'ドラゴン'],
    weakness: {
      single: ['エスパー', 'あく'],
      double: []
    },
    strength: {
      single: ['どく', 'むし'],
      double: [],
      noEffect: ['ノーマル', 'かくとう']
    },
    skills: []
  },
  {
    types: ['ゴースト', 'あく'],
    weakness: {
      single: ['エスパー', 'あく'],
      double: []
    },
    strength: {
      single: ['どく', 'むし'],
      double: [],
      noEffect: ['ノーマル', 'かくとう']
    },
    skills: []
  },
  {
    types: ['ゴースト', 'はがね'],
    weakness: {
      single: ['エスパー', 'あく'],
      double: []
    },
    strength: {
      single: ['どく', 'むし'],
      double: [],
      noEffect: ['ノーマル', 'かくとう']
    },
    skills: []
  },
  {
    types: ['ゴースト', 'フェアリー'],
    weakness: {
      single: ['エスパー', 'あく'],
      double: []
    },
    strength: {
      single: ['どく', 'むし'],
      double: [],
      noEffect: ['ノーマル', 'かくとう']
    },
    skills: []
  },
  {
    types: ['ドラゴン', 'あく'],
    weakness: {
      single: ['こおり', 'ドラゴン', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'でんき', 'くさ'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['ドラゴン', 'はがね'],
    weakness: {
      single: ['こおり', 'ドラゴン', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'でんき', 'くさ'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['ドラゴン', 'フェアリー'],
    weakness: {
      single: ['こおり', 'ドラゴン', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['ほのお', 'みず', 'でんき', 'くさ'],
      double: [],
      noEffect: []
    },
    skills: []
  },
  {
    types: ['あく', 'はがね'],
    weakness: {
      single: ['かくとう', 'むし', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['ゴースト', 'あく'],
      double: [],
      noEffect: ['エスパー']
    },
    skills: []
  },
  {
    types: ['あく', 'フェアリー'],
    weakness: {
      single: ['かくとう', 'むし', 'フェアリー'],
      double: []
    },
    strength: {
      single: ['ゴースト', 'あく'],
      double: [],
      noEffect: ['エスパー']
    },
    skills: []
  },
  {
    types: ['はがね', 'フェアリー'],
    weakness: {
      single: ['ほのお', 'じめん'],
      double: [],
      noEffect: []
    },
    strength: {
      single: [
        'ノーマル',
        'くさ',
        'こおり',
        'ひこう',
        'エスパー',
        'いわ',
        'あく',
        'フェアリー'
      ],
      double: ['むし'],
      noEffect: ['どく', 'ドラゴン']
    },
    skills: []
  }
]

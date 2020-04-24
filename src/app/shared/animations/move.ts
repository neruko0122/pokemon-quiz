import { animate, animation, style } from '@angular/animations'

export const moveUpAnimation = animation([
  style({
    transform: '*'
  }),
  animate(
    '1s',
    style({
      transform: 'translateY(-100px)'
    })
  )
])

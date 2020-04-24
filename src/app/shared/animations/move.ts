import { animate, animation, style } from '@angular/animations'

export const moveUpAnimation = animation([
  style({
    transform: '*'
  }),
  animate(
    '1s',
    style({
      transform: 'translateY(-50px)'
    })
  )
])

export const moveDownAnimation = animation([
  style({
    transform: '*'
  }),
  animate(
    '1s',
    style({
      transform: 'translateY(50px)'
    })
  )
])

export const moveRightAnimation = animation([
  style({
    transform: '*'
  }),
  animate(
    '1s',
    style({
      transform: 'translateX(50px)'
    })
  )
])

export const moveLeftAnimation = animation([
  style({
    transform: '*'
  }),
  animate(
    '1s',
    style({
      transform: 'translateX(-50px)'
    })
  )
])

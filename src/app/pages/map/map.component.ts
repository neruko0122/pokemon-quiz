import {
  AnimationEvent,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { Subject } from 'rxjs'
import {
  moveDownAnimation,
  moveLeftAnimation,
  moveRightAnimation,
  moveUpAnimation
} from 'src/app/shared/animations'

import { DEFAULT_CONFIG } from './../../shared/constants/map'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  animations: [
    trigger('moveUp', [
      transition('false => true', [useAnimation(moveUpAnimation)])
    ]),
    trigger('moveRight', [
      transition('false => true', [useAnimation(moveRightAnimation)])
    ]),
    trigger('moveLeft', [
      transition('false => true', [useAnimation(moveLeftAnimation)])
    ]),
    trigger('moveDown', [
      transition('false => true', [useAnimation(moveDownAnimation)])
    ])
  ]
})
export class MapComponent implements OnInit, OnDestroy {
  imageUrl!: string
  iconUrl!: string
  config = DEFAULT_CONFIG
  translateX = 0
  translateY = 0
  isMoveUp = false
  isMoveRight = false
  isMoveLeft = false
  isMoveDown = false
  style = {
    transform: '',
    msTransform: '',
    oTransform: '',
    webkitTransform: ''
  }
  onDestroy$ = new Subject()

  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.imageUrl = '/assets/images/map/map_kanto.jpg'
    this.iconUrl = '/assets/images/pokemon/gif/025-1.gif'
    this.spinner.hide()
    setTimeout(() => {
      this.up()
    }, 3000)
    setTimeout(() => {
      this.router.navigate(['/quiz'])
    }, 5000)
  }

  ngOnDestroy(): void {
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }

  up(): void {
    if (this.translateY >= 0) {
      this.isMoveUp = true
    }
  }

  down(): void {
    if (this.translateY <= 0) {
      this.isMoveDown = true
    }
  }

  left(): void {
    if (this.translateX >= 0) {
      this.isMoveLeft = true
    }
  }

  right(): void {
    if (this.translateX <= 0) {
      this.isMoveRight = true
    }
  }

  submit() {}

  private updateStyle(): void {
    this.style.transform = `translate(${this.translateX}px,
      ${this.translateY}px)`
    this.style.msTransform = this.style.transform
    this.style.webkitTransform = this.style.transform
    this.style.oTransform = this.style.transform
  }

  moveStartEvent(event: AnimationEvent) {
    switch (event.triggerName) {
      case 'moveUp':
        this.iconUrl = '/assets/images/pokemon/gif/025-2.gif'
        break
      case 'moveDown':
        break
      case 'moveRight':
        this.iconUrl = '/assets/images/pokemon/gif/025-3.gif'
        break
      case 'moveLeft':
        this.iconUrl = '/assets/images/pokemon/gif/025-4.gif'
        break
    }
  }

  moveEndEvent(event: AnimationEvent) {
    switch (event.triggerName) {
      case 'moveUp':
        this.translateY -= 30
        this.isMoveUp = false
        break
      case 'moveDown':
        this.translateY += 30
        this.isMoveDown = false
        break
      case 'moveRight':
        this.translateX += 30
        this.isMoveRight = false
        break
      case 'moveLeft':
        this.translateX -= 30
        this.isMoveLeft = false
        break
    }
    this.iconUrl = '/assets/images/pokemon/gif/025-1.gif'
    this.updateStyle()
  }
}

import {
  animate,
  AnimationEvent,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { moveUpAnimation } from 'src/app/shared/animations'

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
      transition('false => true', [
        style({ transform: '*' }),
        animate('1s', style({ transform: 'translateX(100px)' }))
      ])
    ]),
    trigger('moveLeft', [
      transition('false => true', [
        style({ transform: '*' }),
        animate('1s', style({ transform: 'translateX(-100px)' }))
      ])
    ]),
    trigger('moveDown', [
      transition('false => true', [
        style({ transform: '*' }),
        animate('1s', style({ transform: 'translateY(100px)' }))
      ])
    ])
  ]
})
export class MapComponent implements OnInit {
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
    console.log('###Start: ' + event.triggerName)
    console.log(event.element.style.transform)
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
    console.log('###End: ' + event.triggerName)
    console.log(event.element.style.transform)
    switch (event.triggerName) {
      case 'moveUp':
        this.translateY -= 60
        this.isMoveUp = false
        break
      case 'moveDown':
        this.translateY += 60
        this.isMoveDown = false
        break
      case 'moveRight':
        this.translateX += 60
        this.isMoveRight = false
        break
      case 'moveLeft':
        this.translateX -= 60
        this.isMoveLeft = false
        break
    }
    this.iconUrl = '/assets/images/pokemon/gif/025-1.gif'
    this.updateStyle()
  }
}

import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  imageUrl!: string
  iconUrl!: string

  constructor() {}

  ngOnInit(): void {
    this.imageUrl = '/assets/images/map/map_kanto.jpg'
    this.iconUrl = '/assets/images/pokemon/gif/025-1.gif'
  }
}

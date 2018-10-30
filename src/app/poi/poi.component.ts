import { Component, OnInit } from '@angular/core';
import { PoiService } from '../services/poi.service';

@Component({
  selector: 'app-poi',
  templateUrl: './poi.component.html',
  styleUrls: ['./poi.component.css']
})
export class PoiComponent implements OnInit {
  poi: Object
  array = []

  constructor(
    private poiService: PoiService,
  ) { }

  ngOnInit() {
    return this.poiService.getPoi().subscribe(data => {
      this.poi = data.data.places
      console.log(this.poi)
    })

    // return this.poiService.getMedia().subscribe(data => {
    //   this.array.push(data.data.media)
    //   console.log(this.array)
    // })
  }

}

import { Component, OnInit } from '@angular/core';
import { PoiService } from '../services/poi.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Object

  constructor(
    private poiService: PoiService,
  ) { }

  ngOnInit() {
    return this.poiService.getRestaurants().subscribe(data => {
      this.restaurants = data
      console.log(this.restaurants)
    })
  }

}

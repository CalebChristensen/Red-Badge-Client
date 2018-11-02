import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { PoiService } from '../services/poi.service';
import { getPreviousOrParentTNode } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-poi',
  templateUrl: './poi.component.html',
  styleUrls: ['./poi.component.css']
})
export class PoiComponent implements OnInit {
  myForm: FormGroup
  poi: Object
  array: any
  countryName = new FormControl("")
  cityName = new FormControl("")
  cities: any
  restaurants: Object
  trips: Object


  constructor(
    private fb: FormBuilder,
    private poiService: PoiService,
  ) { }

  ngOnInit() {
    return this.poiService.getCountries().subscribe(data => {
      this.array = data
      console.log(this.array)
    })

  }

  getCities() {
    return this.poiService.getCities(this.countryName.value).subscribe(data => {
      this.cities = data
    })
  }

  getPoi(e): void {
    this.poiService.getPoi(this.cityName.value).subscribe(data => {
      this.poi = data
    })
  }
  getRestaurants(e): void {
    this.poiService.getRestaurants(this.cityName.value).subscribe(data => {
      this.restaurants = data
    })
  }
    getTrips(e): void {
    this.poiService.getTrips(this.cityName.value).subscribe(data => {
    this.trips = data
  })
}

}

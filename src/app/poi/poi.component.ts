import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { PoiService } from '../services/poi.service';
import { getPreviousOrParentTNode } from '@angular/core/src/render3/instructions';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-poi',
  templateUrl: './poi.component.html',
  styleUrls: ['./poi.component.css']
})
export class PoiComponent implements OnInit {
  myForm: FormGroup
  countryName = new FormControl("")
  cityName = new FormControl("")
  array: any
  cities: any
  poi: any
  restaurants: any
  trips: any


  constructor(
    private fb: FormBuilder,
    private poiService: PoiService,
  ) { }

  ngOnInit() {
    return this.poiService.getCountries().subscribe(data => {
      this.array = data
      
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
      this.restaurants = ''
      this.trips = ''
    })
  }
  getRestaurants(e): void {
    this.poiService.getRestaurants(this.cityName.value).subscribe(data => {
      this.restaurants = data
      this.poi = ''
      this.trips = ''
    })
  }
    getTrips(e): void {
    this.poiService.getTrips(this.cityName.value).subscribe(data => {
    this.trips = data
    this.poi = ''
    this.restaurants = ''
  })
}

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PoiService } from '../services/poi.service';

@Component({
  selector: 'app-poi',
  templateUrl: './poi.component.html',
  styleUrls: ['./poi.component.css']
})
export class PoiComponent implements OnInit {

  countryName = new FormControl("")
  cityName = new FormControl("")
  array: any
  cities: any
  poi: any
  restaurants: any
  trips: any
  media: any
  selectedItem: any
  token = sessionStorage.getItem('token')


  constructor(
    private poiService: PoiService
  ) { }

  ngOnInit() {
    return this.poiService.getCountries().subscribe(data => this.array = data)
  }


  getCities() {
    return this.poiService.getCities(this.countryName.value).subscribe(data => this.cities = data)
  }

  getPoi(): void {
    this.poiService.getPoi(this.cityName.value).subscribe(data => {
      this.poi = data
      this.restaurants = ''
      this.trips = ''
      this.media = ''
    })
  }
  getRestaurants(): void {
    this.poiService.getRestaurants(this.cityName.value).subscribe(data => {
      this.restaurants = data
      this.poi = ''
      this.trips = ''
      this.media = ''
    })
  }
  getTrips(): void {
    this.poiService.getTrips(this.cityName.value).subscribe(data => {
      this.trips = data
      this.poi = ''
      this.restaurants = ''
      this.media = ''
    })
  }
  getMedia(): void {
    this.poiService.getMedia(this.cityName.value).subscribe(data => {
      this.media = data
      this.poi = ''
      this.restaurants = ''
      this.trips = ''
    })
  }

  addPoi(name: string, name_suffix: string, url: string) {
    this.poiService.addPoi(name, name_suffix, url).subscribe()
    alert(`${name} was added to your Places Of Interest BucketList!`)
  }

  addTour(name: string, start_on: string, url: string) {
    this.poiService.addTour(name, start_on, url).subscribe()
    alert(`${name} was added to your Tours BucketList!`)
  }

  addRest(name: string, name_suffix: string, url: string) {
    this.poiService.addRest(name, name_suffix, url).subscribe()
    alert(`${name} was added to your Restaurants BucketList!`)
  }


}

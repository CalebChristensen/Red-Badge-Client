import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poi } from '../poi';
import { Tour } from '../tour';
import { Rest } from '../rest';

let token = sessionStorage.getItem('token')

const httpOptions = {
  headers: new HttpHeaders({'Authorization': token})
}
@Injectable({
  providedIn: 'root'
})

export class PoiService {

  constructor(public http: HttpClient) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('x-api-key', '3XARRaE3NR4VdZpUIAgwO3wJ7I1mnDyp1WQK6CSO');
    console.log('Hello POI Provider');
  }

  getPoi(id) {
    return this.http.get(`https://api.sygictravelapi.com/1.1/en/places/list?parents=city:${id}&categories=sightseeing&limit=10`, {
      headers: new HttpHeaders().set('x-api-key', '3XARRaE3NR4VdZpUIAgwO3wJ7I1mnDyp1WQK6CSO')
    })
  }

  getMedia() {
    return this.http.get(`https://api.sygictravelapi.com/1.1/en/places/poi:530/media`, {
      headers: new HttpHeaders().set('x-api-key', '3XARRaE3NR4VdZpUIAgwO3wJ7I1mnDyp1WQK6CSO')
    })
  }

  getRestaurants(id) {
    return this.http.get(`https://api.sygictravelapi.com/1.1/en/places/list?parents=city:${id}&categories=eating&limit=10`, {
      headers: new HttpHeaders().set('x-api-key', '3XARRaE3NR4VdZpUIAgwO3wJ7I1mnDyp1WQK6CSO') 
    })
  }

  getTrips(id) {
    return this.http.get(`https://api.sygictraveldata.com/1.1/en/trips/templates?parent_place_id=city:${id}`, {
      headers: new HttpHeaders().set('x-api-key', '3XARRaE3NR4VdZpUIAgwO3wJ7I1mnDyp1WQK6CSO')
    })
  }

  getCountries() {
    return this.http.get(`http://localhost:3000/country/getall`)
  }

  getCities(id) {
    return this.http.get(`http://localhost:3000/id/getallcities/${id}`)
  }

  addPoi(name: string, name_suffix: string, url: string) {
    return this.http.post<Poi>(`http://localhost:3000/bucketpoi/create`, {name: name, name_suffix: name_suffix, url: url}, httpOptions)
  }

  addTour(name: string, starts_on: string, url: string) {
    return this.http.post<Tour>(`http://localhost:3000/buckettour/create`, {name:name, starts_on: starts_on, url: url}, httpOptions)
  }

  addRest(name: string, name_suffix: string, url: string) {
    return this.http.post<Rest>(`http://localhost:3000/bucketrest/create`, {name:name, name_suffix:name_suffix, url: url}, httpOptions)
  }

  accountPoi() {
    return this.http.get(`http://localhost:3000/bucketpoi/getall`, httpOptions)
  }

  accountRest() {
    return this.http.get(`http://localhost:3000/bucketrest/getall`, httpOptions)
  }

  accountTour() {
    return this.http.get(`http://localhost:3000/buckettour/getall`, httpOptions)
  }

}
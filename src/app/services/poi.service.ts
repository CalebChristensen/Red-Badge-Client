import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';

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
}
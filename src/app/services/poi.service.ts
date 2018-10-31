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

  getPoi() {
    return this.http.get(`https://api.sygictravelapi.com/1.1/en/places/list?parents=city:16&categories=sightseeing&limit=10`, {
      headers: new HttpHeaders().set('x-api-key', '3XARRaE3NR4VdZpUIAgwO3wJ7I1mnDyp1WQK6CSO')
    })
  }

  getMedia() {
    return this.http.get(`https://api.sygictravelapi.com/1.1/en/places/poi:530/media`, {
      headers: new HttpHeaders().set('x-api-key', '3XARRaE3NR4VdZpUIAgwO3wJ7I1mnDyp1WQK6CSO')
    })
  }

  getRestaurants() {
    return this.http.get(`https://api.sygictravelapi.com/1.1/en/places/list?bounds=51.487744,-0.1879067,51.526849,-0.0464577&categories=eating`, {
      headers: new HttpHeaders().set('x-api-key', '3XARRaE3NR4VdZpUIAgwO3wJ7I1mnDyp1WQK6CSO') 
    })
  }
}
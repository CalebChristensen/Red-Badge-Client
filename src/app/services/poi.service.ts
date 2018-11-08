import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poi } from '../poi';
import { Tour } from '../tour';
import { Rest } from '../rest';
import { environment, APIURL } from '../../environments/environment.prod'

let token = sessionStorage.getItem('token')
const APIKEY = environment.APIKEY

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
    headers = headers.append('x-api-key', APIKEY);
    console.log('Hello POI Provider');
  }

  getPoi(id) {
    return this.http.get(`https://api.sygictravelapi.com/1.1/en/places/list?parents=city:${id}&categories=sightseeing&limit=10`, {
      headers: new HttpHeaders().set('x-api-key', APIKEY)
    })
  }

  getMedia() {
    return this.http.get(`https://api.sygictravelapi.com/1.1/en/places/poi:530/media`, {
      headers: new HttpHeaders().set('x-api-key', APIKEY)
    })
  }

  getRestaurants(id) {
    return this.http.get(`https://api.sygictravelapi.com/1.1/en/places/list?parents=city:${id}&categories=eating&limit=10`, {
      headers: new HttpHeaders().set('x-api-key', APIKEY) 
    })
  }

  getTrips(id) {
    return this.http.get(`https://api.sygictraveldata.com/1.1/en/trips/templates?parent_place_id=city:${id}`, {
      headers: new HttpHeaders().set('x-api-key', APIKEY)
    })
  }

  getCountries() {
    return this.http.get(`${APIURL}/country/getall`)
  }

  getCities(id) {
    return this.http.get(`${APIURL}/id/getallcities/${id}`)
  }

  addPoi(name: string, name_suffix: string, url: string) {
    return this.http.post<Poi>(`${APIURL}/bucketpoi/create`, {name: name, name_suffix: name_suffix, url: url}, httpOptions)
  }

  addTour(name: string, starts_on: string, url: string) {
    return this.http.post<Tour>(`${APIURL}/buckettour/create`, {name:name, starts_on: starts_on, url: url}, httpOptions)
  }

  addRest(name: string, name_suffix: string, url: string) {
    return this.http.post<Rest>(`${APIURL}/bucketrest/create`, {name:name, name_suffix:name_suffix, url: url}, httpOptions)
  }

  accountPoi() {
    return this.http.get(`${APIURL}/bucketpoi/getall`, httpOptions)
  }

  accountRest() {
    return this.http.get(`${APIURL}/bucketrest/getall`, httpOptions)
  }

  accountTour() {
    return this.http.get(`${APIURL}/buckettour/getall`, httpOptions)
  }

  completedPoi(name: string, name_suffix: string, url: string) {
    return this.http.post<Poi>(`${APIURL}/completepoi/completed`, {name: name, name_suffix: name_suffix, url: url}, httpOptions)
  }

  completedRest(name: string, name_suffix: string, url: string) {
    return this.http.post<Rest>(`${APIURL}/completerest/completed`, {name: name, name_suffix: name_suffix, url: url}, httpOptions)
  }

  completedTour(name: string, starts_on: string, url: string) {
    return this.http.post<Tour>(`${APIURL}/completetour/completed`,{name:name, starts_on: starts_on, url: url}, httpOptions)
  }

  getCompletedPoi() {
    return this.http.get(`${APIURL}/completepoi/getall`, httpOptions)
  }

  getCompletedRest() {
    return this.http.get(`${APIURL}/completerest/getall`, httpOptions)
  }

  getCompletedTour() {
    return this.http.get(`${APIURL}/completetour/getall`, httpOptions)
  }

  deletePoi(id){
    return this.http.delete(`${APIURL}/bucketpoi/delete/${id}`,
    httpOptions)
  }

  deleteRest(id) {
    return this.http.delete(`${APIURL}/bucketrest/delete/${id}`, httpOptions)
  }

  deleteTour(id) {
    return this.http.delete(`${APIURL}/buckettour/delete/${id}`, httpOptions)
  }
}
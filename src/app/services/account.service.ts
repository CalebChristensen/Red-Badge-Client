import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

let token = sessionStorage.getItem('token')

const httpOptions = {
  headers: new HttpHeaders({'Authorization': token})
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('http://localhost:3000/user', httpOptions)
  }

}
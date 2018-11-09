import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { APIURL } from '../../environments/environment.prod'
import { User2 } from '../user2';

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
    return this.http.get<User2>(`${APIURL}/user`, httpOptions)
  }

  getUserUpdate(id) {
    return this.http.get<User2>(`${APIURL}/user/update/${id}`, httpOptions)
  }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { APIURL } from '../../environments/environment.prod'

let token = sessionStorage.getItem('token')

const httpOptions = {
  headers: new HttpHeaders({'Authorization': token})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  signUp(username: string, email: string, password: string){
    return this.http.post<User>(`${APIURL}/user/createuser`, { username: username, email: email, password: password})
  }

  login(username: string, password: string) {
    return this.http.post<User>(`${APIURL}/user/signin`, { username: username, password: password })
  }

  update(username: string, email: string, id) {
    const user = {
      username: username,
      email: email
    }
    return this.http.put(`${APIURL}/user/update/${id}`, user, httpOptions)
  }

  delete() {
    return this.http.delete(`${APIURL}/user/delete`, httpOptions)
  }

  delete2(id) {
    return this.http.delete(`${APIURL}/user/adminDelete/${id}`, httpOptions)
  }

  getUsers() {
    return this.http.get(`${APIURL}/user/allUsers`, httpOptions)
  }

}

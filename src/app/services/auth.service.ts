import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

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
    return this.http.post<User>('http://localhost:3000/user/createuser', { username: username, email: email, password: password})
  }

  login(username: string, password: string) {
    return this.http.post<User>('http://localhost:3000/user/signin', { username: username, password: password })
  }

  update(username: string, email: string, password: string, id) {
    const user = {
      username: username,
      email: email,
      passwordhash: password
    }
    return this.http.put(`http://localhost:3000/user/update/${id}`, user, httpOptions)
  }

  delete() {
    return this.http.delete('http://localhost:3000/user/delete', httpOptions)
  }

  delete2(id) {
    return this.http.delete(`http://localhost:3000/user/adminDelete/${id}`, httpOptions)
  }

  getUsers() {
    return this.http.get('http://localhost:3000/user/allUsers', httpOptions)
  }

}

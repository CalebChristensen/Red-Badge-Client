import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { User2 } from '../user2'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  signUp(username: string, email: string, password: string){
    return this.http.post<User>('http://localhost:3000/user/createuser', { username: username, email: email, password: password})
  }

  login(username: string, password: string) {
    return this.http.post<User2>('http://localhost:3000/user/signin', { username: username, password: password })
  }

}

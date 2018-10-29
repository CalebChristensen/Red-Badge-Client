import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, email: string, password: string) {
    return this.http.post<User>('http://localhost:3000/user/createuser', { username: username, email: email, password: password })
    .pipe(map(user => {
      if(user && user.token){
        sessionStorage.setItem('currentUser', JSON.stringify(user.token))
      }

      return user;
    }))
  }

}

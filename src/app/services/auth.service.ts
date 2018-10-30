import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubect: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubect = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubect.asObservable();
   }

   public get currentUserValue(): User {
      return this.currentUserSubect.value;
   }

  signUp(username: string, email: string, password: string){
    return this.http.post<User>('http://localhost:3000/user/createuser', { username: username, email: email, password: password})
  }

  login(username: string, password: string) {
    return this.http.post<User>('http://localhost:3000/user/signin', { username: username, password: password })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('')
  password = new FormControl('')

  constructor(private auth: AuthService) {}

  ngOnInit() {
  }

  login() {
    this.auth.login(this.username.value, this.password.value)
    .subscribe(user => {
      console.log(user)
      sessionStorage.setItem('token', user.sessionToken)
      alert(`Welcome ${user.user.username}!`)
      window.location.href = '/home'
    })
  }

}

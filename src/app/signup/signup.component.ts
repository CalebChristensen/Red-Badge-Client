import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  username = new FormControl('')
  email = new FormControl('')
  password = new FormControl('')

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signUp() {
    this.auth.signUp(this.username.value, this.email.value, this.password.value)
    .subscribe(user => {
      sessionStorage.setItem('token', user.sessionToken)
      alert(user.message)
      window.location.href = '/home'
    })
  }

}

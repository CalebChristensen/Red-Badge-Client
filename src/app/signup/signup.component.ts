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
    if (this.password.value.length >= 5 && this.password.value.length <= 20) {
      this.auth.signUp(this.username.value, this.email.value, this.password.value)
        .subscribe(user => {
          sessionStorage.setItem('token', user.sessionToken)
          alert(user.message)
          window.location.href = '/home'
        },
          err => {
            if (err.error.fields.username === this.username.value) {
              alert('This username already exists')
            } else {
              if (err.error.fields.email === this.email.value) {
                alert('This email is already associated with another account')
              }
            }
          })
    } else {
      alert('Password must be between 5 and 20 characters!')
    }
  }

}

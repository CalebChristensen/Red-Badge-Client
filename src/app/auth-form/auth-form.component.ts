import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  authForm: FormGroup;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })  
  }
  

  get f() { return this.authForm.controls; }

  Login(){
    this.auth.login(this.f.username.value, this.f.email.value, this.f.password.value)
      .pipe()
      .subscribe(
        user => {
          console.log(user)
        }
      ) 
  }

  Signup(){
    this.auth.login(this.f.username.value, this.f.email.value, this.f.password.value)
      .pipe()
      .subscribe(
        user => {
          console.log(user)
        }
      ) 
  }

}

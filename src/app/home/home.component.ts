import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  token = sessionStorage.getItem('token')
  noToken = sessionStorage.getItem('token: false')

  constructor() { }
  

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core'
import { AccountService } from '../services/account.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userData: Object

  constructor(private acc: AccountService) { }

  ngOnInit() {
    this.acc.getUser().subscribe(user => this.userData = user)
  }

}

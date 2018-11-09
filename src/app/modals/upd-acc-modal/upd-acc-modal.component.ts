import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialogRef } from '@angular/material';
import { Update } from '../../update'
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-upd-acc-modal',
  templateUrl: './upd-acc-modal.component.html',
  styleUrls: ['./upd-acc-modal.component.css']
})
export class UpdAccModalComponent implements OnInit {

  newUser: Update = {
    username: '',
    email: '',
    password: ''
  }

  id = sessionStorage.getItem('userId')

  constructor(
    private auth: AuthService, 
    private dialog: MatDialogRef<UpdAccModalComponent>,
    private acc: AccountService
    ) { }

  ngOnInit() {
    this.acc.getUserUpdate(this.id).subscribe(user => {
      this.newUser.username = user.username,
      this.newUser.email = user.email
    })
  }

  update() {
    this.auth.update(this.newUser.username, this.newUser.email, this.id)
    .subscribe()
    this.dialog.close()
    window.location.reload()
  }
  
  close() {
    this.dialog.close()
  }

}

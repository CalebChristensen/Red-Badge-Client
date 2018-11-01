import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AccountComponent } from 'src/app/account/account.component';

@Component({
  selector: 'app-upd-acc-modal',
  templateUrl: './upd-acc-modal.component.html',
  styleUrls: ['./upd-acc-modal.component.css']
})
export class UpdAccModalComponent implements OnInit {

  username = new FormControl()
  email = new FormControl()
  password = new FormControl()

  constructor(
    private auth: AuthService, 
    private dialog: MatDialogRef<UpdAccModalComponent>
    ) { }

  ngOnInit() {
  }

  update() {
    this.auth.update(this.username.value, this.email.value, this.password.value)
    .subscribe()
    this.dialog.close()
    window.location.reload()
  }

}

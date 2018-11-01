import { Component, OnInit, Inject } from '@angular/core'
import { AccountService } from '../services/account.service'
import { MatDialog } from '@angular/material'
import { UpdAccModalComponent } from '../modals/upd-acc-modal/upd-acc-modal.component';
import { FormControl } from '@angular/forms';
import { DelAccModalComponent } from '../modals/del-acc-modal/del-acc-modal.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  username = new FormControl()
  email = new FormControl()
  password = new FormControl()
  userData: Object

  constructor(private acc: AccountService, public dialog: MatDialog) { }

  ngOnInit() {
    this.acc.getUser().subscribe(user => this.userData = user)
  }

  openUpdateDialog(): void {
    this.dialog.open(UpdAccModalComponent, {
      panelClass: 'dialog'
    })
  }

  openDeleteDialog(): void {
    this.dialog.open(DelAccModalComponent)
  }

}

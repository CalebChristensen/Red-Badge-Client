import { Component, OnInit } from '@angular/core'
import { AccountService } from '../services/account.service'
import { MatDialog } from '@angular/material'
import { UpdAccModalComponent } from '../modals/upd-acc-modal/upd-acc-modal.component';
import { FormControl } from '@angular/forms';
import { DelAccModalComponent } from '../modals/del-acc-modal/del-acc-modal.component';
import { PoiService } from '../services/poi.service';

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

  openUpdateDialog(id): void {
    sessionStorage.setItem('userId', id)
    this.dialog.open(UpdAccModalComponent)
  }

  openDeleteDialog(): void {
    this.dialog.open(DelAccModalComponent)
  }

}

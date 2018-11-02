import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material';
import { UpdAccModalComponent } from '../modals/upd-acc-modal/upd-acc-modal.component';
import { DelAccModalComponent } from '../modals/del-acc-modal/del-acc-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  results: Object

  constructor(private auth: AuthService, private dialog: MatDialog) { }

  ngOnInit() {
    this.auth.getUsers().subscribe(data => this.results = data)
  }

  openUpdateDialog(id): void {
    this.dialog.open(UpdAccModalComponent, {
      panelClass: 'dialog'
    })
    sessionStorage.setItem('userId', id)
  }

  openDeleteDialog(): void {
    this.dialog.open(DelAccModalComponent)
  }

}

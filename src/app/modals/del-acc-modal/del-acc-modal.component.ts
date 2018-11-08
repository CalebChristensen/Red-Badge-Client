import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-del-acc-modal',
  templateUrl: './del-acc-modal.component.html',
  styleUrls: ['./del-acc-modal.component.css']
})
export class DelAccModalComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private dialog: MatDialogRef<DelAccModalComponent>
  ) { }

  ngOnInit() {
  }

  delete() {
    this.auth.delete().subscribe()
    sessionStorage.removeItem('token')
    this.dialog.close()
    window.location.href = '/home'
  }

  close() {
    this.dialog.close()
  }

}

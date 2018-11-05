import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-admin-del-modal',
  templateUrl: './admin-del-modal.component.html',
  styleUrls: ['./admin-del-modal.component.css']
})
export class AdminDelModalComponent implements OnInit {

  id = sessionStorage.getItem('userId')

  constructor(
    private auth: AuthService,
    private dialog: MatDialogRef<AdminDelModalComponent>
  ) { }

  ngOnInit() {
  }

  delete() {
    this.auth.delete2(this.id).subscribe()
    this.dialog.close()
    window.location.reload()
  }

  close() {
    this.dialog.close()
  }

}

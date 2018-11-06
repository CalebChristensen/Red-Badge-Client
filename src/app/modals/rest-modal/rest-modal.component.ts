import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PoiService } from '../../services/poi.service';

@Component({
  selector: 'app-rest-modal',
  templateUrl: './rest-modal.component.html',
  styleUrls: ['./rest-modal.component.css']
})
export class RestModalComponent implements OnInit {

  rest: Object

  constructor(
    private poi: PoiService,
    private dialog: MatDialogRef<RestModalComponent>
  ) { }

  ngOnInit() {
    this.poi.accountRest().subscribe(data => this.rest = data)
  }

  close() {
    this.dialog.close()
  }

}

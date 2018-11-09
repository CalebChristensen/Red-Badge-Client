import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PoiService } from '../../services/poi.service';

@Component({
  selector: 'app-completed-rest-modal',
  templateUrl: './completed-rest-modal.component.html',
  styleUrls: ['./completed-rest-modal.component.css']
})
export class CompletedRestModalComponent implements OnInit {

  rest: Object

  constructor(
    private poi: PoiService,
    private dialog: MatDialogRef<CompletedRestModalComponent>
  ) { }

  ngOnInit() {
    this.poi.getCompletedRest().subscribe(data => this.rest = data)
  }

  deleteCompletedRest(id) {
    this.poi.deleteCompletedRest(id).subscribe()
    this.dialog.close()
    window.location.reload()
  }

  close() {
    this.dialog.close()
  }

}

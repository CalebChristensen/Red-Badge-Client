import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PoiService } from '../../services/poi.service';

@Component({
  selector: 'app-completed-poi-modal',
  templateUrl: './completed-poi-modal.component.html',
  styleUrls: ['./completed-poi-modal.component.css']
})
export class CompletedPoiModalComponent implements OnInit {

  places: Object

  constructor(
    private poi: PoiService,
    private dialog: MatDialogRef<CompletedPoiModalComponent>
  ) { }

  ngOnInit() {
    this.poi.getCompletedPoi().subscribe(data => this.places = data)
  }

  deleteCompletedPoi(id) {
    this.poi.deleteCompletedPoi(id).subscribe()
    this.dialog.close()
    window.location.reload()
  }

  close() {
    this.dialog.close()
  }
}

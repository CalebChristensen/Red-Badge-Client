import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PoiService } from '../../services/poi.service';

@Component({
  selector: 'app-poi-modal',
  templateUrl: './poi-modal.component.html',
  styleUrls: ['./poi-modal.component.css']
})
export class PoiModalComponent implements OnInit {

  places: Object

  constructor(
    private poi: PoiService,
    private dialog: MatDialogRef<PoiModalComponent>
  ) { }

  ngOnInit() {
    this.poi.accountPoi().subscribe(data => this.places = data)
  }

  close() {
    this.dialog.close()
  }

}

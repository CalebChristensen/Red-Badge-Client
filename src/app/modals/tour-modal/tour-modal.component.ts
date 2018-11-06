import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PoiService } from '../../services/poi.service';

@Component({
  selector: 'app-tour-modal',
  templateUrl: './tour-modal.component.html',
  styleUrls: ['./tour-modal.component.css']
})
export class TourModalComponent implements OnInit {

  tour: Object

  constructor(
    private poi: PoiService,
    private dialog: MatDialogRef<TourModalComponent>
  ) { }

  ngOnInit() {
    this.poi.accountTour().subscribe(data => this.tour = data)
  }

  close() {
    this.dialog.close()
  }

}

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

  completedTour(name: string, starts_on: string, url: string, id) {
    this.poi.completedTour(name, starts_on, url).subscribe()
    this.deleteTour(id)
    window.location.reload()
  }

  deleteTour(id) {
    this.poi.deleteTour(id).subscribe()
    this.dialog.close()
    window.location.reload()
  }

  close() {
    this.dialog.close()
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PoiService } from '../../services/poi.service';

@Component({
  selector: 'app-completed-tour-modal',
  templateUrl: './completed-tour-modal.component.html',
  styleUrls: ['./completed-tour-modal.component.css']
})
export class CompletedTourModalComponent implements OnInit {

  tour: Object 
  
  constructor(
    private poi: PoiService,
    private dialog: MatDialogRef<CompletedTourModalComponent>
  ) { }
  

  ngOnInit() {
    this.poi.getCompletedTour().subscribe(data => this.tour = data)
  }

  deleteCompletedTour(id) {
    this.poi.deleteCompletedTour(id).subscribe()
    this.dialog.close()
    window.location.reload()
  }

  close() {
    this.dialog.close()
  }

}

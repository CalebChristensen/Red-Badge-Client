import { Component, OnInit } from '@angular/core';
import { PoiService } from '../services/poi.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  trips: Object

  constructor(
    private poiService: PoiService,
  ) { }

  ngOnInit() {
    return this.poiService.getTrips().subscribe(data => {
      this.trips = data
      console.log(this.trips)
    })
  }

}

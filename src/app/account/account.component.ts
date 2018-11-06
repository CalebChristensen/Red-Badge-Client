import { Component, OnInit } from '@angular/core'
import { AccountService } from '../services/account.service'
import { MatDialog } from '@angular/material'
import { UpdAccModalComponent } from '../modals/upd-acc-modal/upd-acc-modal.component';
import { FormControl } from '@angular/forms';
import { DelAccModalComponent } from '../modals/del-acc-modal/del-acc-modal.component';
import { PoiService } from '../services/poi.service';
import { PoiModalComponent } from '../modals/poi-modal/poi-modal.component';
import { TourModalComponent } from '../modals/tour-modal/tour-modal.component';
import { RestModalComponent } from '../modals/rest-modal/rest-modal.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  username = new FormControl()
  email = new FormControl()
  password = new FormControl()
  userData: Object
  poi: Object
  rest: Object
  tour: Object

  constructor(private acc: AccountService, public dialog: MatDialog, private poiService: PoiService) { }

  ngOnInit() {
    this.acc.getUser().subscribe(user => this.userData = user)

    // this.poiService.accountPoi().subscribe(data => this.poi = data)
    // this.poiService.accountRest().subscribe(data => this.rest = data)
    // this.poiService.accountTour().subscribe(data => this.tour = data)
  }

  openUpdateDialog(id): void {
    sessionStorage.setItem('userId', id)
    this.dialog.open(UpdAccModalComponent)
  }

  openDeleteDialog(): void {
    this.dialog.open(DelAccModalComponent)
  }

  openPoiDialog(): void {
    this.dialog.open(PoiModalComponent)
  }

  openTourDialog(): void {
    this.dialog.open(TourModalComponent)
  }

  openRestDialog(): void {
    this.dialog.open(RestModalComponent)
  }


}

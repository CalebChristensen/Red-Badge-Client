import { Component, OnInit } from '@angular/core'
import { AccountService } from '../services/account.service'
import { MatDialog } from '@angular/material'
import { UpdAccModalComponent } from '../modals/upd-acc-modal/upd-acc-modal.component';
import { DelAccModalComponent } from '../modals/del-acc-modal/del-acc-modal.component';
import { PoiModalComponent } from '../modals/poi-modal/poi-modal.component';
import { TourModalComponent } from '../modals/tour-modal/tour-modal.component';
import { RestModalComponent } from '../modals/rest-modal/rest-modal.component';
import { CompletedPoiModalComponent } from '../modals/completed-poi-modal/completed-poi-modal.component';
import { CompletedRestModalComponent } from '../modals/completed-rest-modal/completed-rest-modal.component';
import { CompletedTourModalComponent } from '../modals/completed-tour-modal/completed-tour-modal.component';
import { NoteModalComponent } from '../modals/note-modal/note-modal.component';
import { NoteService } from '../services/note.service';
import { DeleteNoteModalComponent } from '../modals/delete-note-modal/delete-note-modal.component';
import { UpdateNoteModalComponent } from '../modals/update-note-modal/update-note-modal.component';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userData: Object
  poi: Object
  rest: Object
  tour: Object
  notes: Object

  constructor(
    private acc: AccountService,
    private dialog: MatDialog,
    private note: NoteService
     ) { }

  ngOnInit() {
    this.acc.getUser().subscribe(user => this.userData = user)
    this.note.getNotes().subscribe(notes => this.notes = notes)
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


  openCompletedPoiDialog(): void {
    this.dialog.open(CompletedPoiModalComponent)
  }

  openCompletedRestDialog(): void {
    this.dialog.open(CompletedRestModalComponent)
  }

  openNoteDialog(): void {
    this.dialog.open(NoteModalComponent)
  }

  deleteNoteDialog(id): void {
    sessionStorage.setItem('noteId', id)
    this.dialog.open(DeleteNoteModalComponent)
  }

  updateNoteDialog(id):void {
    sessionStorage.setItem('noteId', id)
    this.dialog.open(UpdateNoteModalComponent)
  }

  openCompletedTourDialog(): void {
    this.dialog.open(CompletedTourModalComponent)
  }
}
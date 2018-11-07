import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.css']
})
export class NoteModalComponent implements OnInit {

  newNote = new FormControl()

  constructor(
    private note: NoteService,
    private dialog: MatDialogRef<NoteModalComponent>
  ) { }

  ngOnInit() {
  }

  addNote() {
    this.note.addNote(this.newNote.value).subscribe()
    this.dialog.close()
    window.location.reload()
  }

}

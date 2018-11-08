import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-note-modal',
  templateUrl: './update-note-modal.component.html',
  styleUrls: ['./update-note-modal.component.css']
})
export class UpdateNoteModalComponent implements OnInit {

  newNote = new FormControl()
  id = sessionStorage.getItem('noteId')

  constructor(
    private note: NoteService,
    private dialog: MatDialogRef<UpdateNoteModalComponent>
  ) { }

  ngOnInit() {
  }

  update() {
    this.note.updateNote(this.newNote.value, this.id).subscribe()
    this.dialog.close()
    window.location.reload()
  }

  close() {
    this.dialog.close()
  }

}

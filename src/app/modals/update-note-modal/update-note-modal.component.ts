import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatDialogRef } from '@angular/material';
import { Note } from '../../note'

@Component({
  selector: 'app-update-note-modal',
  templateUrl: './update-note-modal.component.html',
  styleUrls: ['./update-note-modal.component.css']
})
export class UpdateNoteModalComponent implements OnInit {

  newNote: Note = {
    note: ''
  }

  id = sessionStorage.getItem('noteId')

  constructor(
    private note: NoteService,
    private dialog: MatDialogRef<UpdateNoteModalComponent>
  ) { }

  ngOnInit() {
    this.note.getNote(this.id).subscribe(note => {
      this.newNote.note = note.note
    })
  }

  update() {
    this.note.updateNote(this.newNote.note, this.id).subscribe()
    this.dialog.close()
    window.location.reload()
  }

  close() {
    this.dialog.close()
  }

}

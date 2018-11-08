import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-note-modal',
  templateUrl: './delete-note-modal.component.html',
  styleUrls: ['./delete-note-modal.component.css']
})
export class DeleteNoteModalComponent implements OnInit {

  id = sessionStorage.getItem('noteId')

  constructor(
    private note: NoteService,
    private dialog: MatDialogRef<DeleteNoteModalComponent>
  ) { }

  ngOnInit() {
  }

  delete() {
    this.note.deleteNote(this.id).subscribe()
    this.dialog.close()
    window.location.reload()
  }

  close() {
    this.dialog.close()
  }

}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

let token = sessionStorage.getItem('token')

const httpOptions = {
  headers: new HttpHeaders({'Authorization': token})
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  addNote(note: string) {
    return this.http.post('http://localhost:3000/notes/create', {note: note}, httpOptions)
  }

  deleteNote(id) {
    return this.http.delete(`http://localhost:3000/notes/delete/${id}`, httpOptions)
  }

  updateNote(note: string, id) {
    return this.http.put(`http://localhost:3000/notes/update/${id}`, {note: note}, httpOptions)
  }

  getNotes() {
    return this.http.get('http://localhost:3000/notes/', httpOptions)
  }

}

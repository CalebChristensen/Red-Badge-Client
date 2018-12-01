import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod'
import { Note } from '../note';

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
    return this.http.post<Note>(`${APIURL}/notes/create`, {note: note}, httpOptions)
  }

  deleteNote(id) {
    return this.http.delete<Note>(`${APIURL}/notes/delete/${id}`, httpOptions)
  }

  updateNote(note: string, id) {
    return this.http.put<Note>(`${APIURL}/notes/update/${id}`, {note: note}, httpOptions)
  }

  getNotes() {
    return this.http.get<Note>(`${APIURL}/notes/`, httpOptions)
  }

  getNote(id) {
    return this.http.get<Note>(`${APIURL}/notes/get/${id}`, httpOptions)
  }

}

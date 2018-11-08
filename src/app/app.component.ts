import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome!';
  token = sessionStorage.getItem('token')
  admin = () => {
    let admin = sessionStorage.getItem('admin')
    if (admin === 'true') {
      return true
    } else {
      return false
    }
  }

  logout() {
    sessionStorage.clear()
    window.location.href = '/home'
  }

}

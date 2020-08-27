import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista zadań';

  getFooter():String {
    return '© Lista zadań zbudowana w Angularze.';
  }

  getDate() {
    return new Date();
  }
}

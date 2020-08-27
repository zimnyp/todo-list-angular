import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // klucz jest stringiem a wartość przypisana do klucza jest stringiem lub datą
  config: {[key: string]: string | Date} = null;

  constructor() {

    setTimeout( ()=>{
      this.config = {
        title: 'Lista zadań',
        footer: '@ LIsta zadań zbudowana w Angularze',
        date: new Date()
      };
    },500);
  }
}

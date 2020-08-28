import { Component } from '@angular/core';
import { title } from 'process';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // klucz jest stringiem a wartość przypisana do klucza jest stringiem lub datą
  config: {[key: string]: string | Date} = null;

  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: false
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false
    }
  ];

  constructor() {

    setTimeout( ()=>{
      this.config = {
        title: 'Lista zadań',
        footer: '@ LIsta zadań zbudowana w Angularze',
        date: new Date()
      };
    },500);
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask(name: string, date: string) {
    const task: Task = {
      name,
      deadline: date,
      done: false 
    };
    this.tasks.push(task);
  }
}

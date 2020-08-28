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
  taskName: string;

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

  onKeyUp(event: KeyboardEvent){
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
    console.dir(target.value);
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: '2020-09-11',
      done: false 
    };
    this.tasks.push(task);
  }
}

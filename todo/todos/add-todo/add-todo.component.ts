import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
  <input type="text" placeholder="할 일 추가" [(ngModel)]="newText">
  <button (click)="addTodo(newText)">+</button>
  `,
  styles: [`
    :host {
      display: block;
      padding: 16px;
      background-color: white;
    }
    input {
      display: inline-block;
      font-size: 18px;
      border: none;
    }
    input:focus, button:focus {
      outline: none;
    }
    button {
      width: 24px;
      height: 24px;
      border-radius: 24px;
      color: white;
      font-size: 16px;
      line-height: 17px;
      border: 1px solid dimgray;
      background-color: darkblue;
    }
  `]
})
export class AddTodoComponent implements OnInit {

    @Output() onTodoAdded = new EventEmitter();
    newText: string;

  constructor() { }

  ngOnInit() {
  }

  addTodo(newText: string){
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }

}

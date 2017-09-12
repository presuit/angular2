import { Component, OnInit } from '@angular/core';
import { Todo } from "../share/todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  newText = '';
  todos: Todo[];//객체에 들어있는 메타데이터를 가지는 배열이 todos다
  today: Date = new Date();

  constructor() {
    this.todos = [
      {done : false, text : '운동하기'},
      {done : true, text : '공부하기'}
    ];
   }

  ngOnInit() {
  }
  
  toggleTodo(todo){
    todo.done = !todo.done;
  }
  
  addTodo(text: string){
    this.todos.push({
      done: false,
      text: text
    });
  }
}

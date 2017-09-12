import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule, MdCheckboxModule,
    MdMenuModule, MdIconModule
  ],
  providers: [],
  declarations: [TodosComponent, TodoComponent, AddTodoComponent],
  exports: [TodosComponent]
})
export class TodoModule { }

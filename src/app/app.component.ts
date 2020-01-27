import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [];

  addTodo(title) {
    this.todos.push({ title });
  }

  toggleTodo(title) {
    const index = this.todos.findIndex((todo) => todo.title === title);
    this.todos[index].completed = !this.todos[index].completed;
  }

  deleteTodo(title) {
    this.todos = this.todos.filter((todo) => todo.title !== title);
  }
}

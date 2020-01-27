import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-adder',
  templateUrl: './todo-adder.component.html',
  styleUrls: ['./todo-adder.component.css']
})
export class TodoAdderComponent implements OnInit {
  @Output() add = new EventEmitter<string>()
  todo: string = ''

  constructor() { }

  ngOnInit() {
  }

  onAdd(event) {
    event.preventDefault();
    this.add.emit(this.todo);
    this.todo = '';
  }
}

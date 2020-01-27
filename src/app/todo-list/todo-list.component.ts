import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() items;
  @Output() toggle = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emitToggle(title) {
    this.toggle.emit(title);
  }

  emitDelete(title) {
    this.delete.emit(title);
  }
}

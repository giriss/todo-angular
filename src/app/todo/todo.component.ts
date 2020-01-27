import { Component, OnInit, HostListener, Output, EventEmitter, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'li[app-todo]',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() title: string;
  @Input() completed: boolean;
  @Output() toggle = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  @HostBinding('class')
  get classes() {
    return `list-group-item list-group-item-action${ this.completed ? ' completed' : '' }`;
  }

  @HostListener('click')
  onClick() {
    this.toggle.emit();
  }

  onClose(event) {
    event.stopPropagation();
    this.delete.emit();
  }
}

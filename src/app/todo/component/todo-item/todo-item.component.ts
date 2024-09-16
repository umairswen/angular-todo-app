import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: { title: string; completed: boolean }; // Input binding to receive a todo
  @Output() toggle = new EventEmitter<void>(); // Event emitter for toggling
  @Output() delete = new EventEmitter<void>(); // Event emitter for deleting

  // Method to emit toggle event
  onToggle() {
    this.toggle.emit();
  }

  // Method to emit delete event
  onDelete() {
    this.delete.emit();
  }
}

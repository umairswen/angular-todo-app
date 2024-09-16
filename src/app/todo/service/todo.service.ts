import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../model/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  todos$: Observable<Todo[]> = this.todosSubject.asObservable();

  private nextId = 1;

  constructor() {
    this.todosSubject.next([
      { id: this.nextId++, title: 'Learn Angular', completed: false },
      { id: this.nextId++, title: 'Build a Todo App', completed: false }
    ]);
  }

  getTodos(): Observable<Todo[]> {
    return this.todos$;
  }

  addTodo(title: string): void {
    const currentTodos = this.todosSubject.value;
    const newTodo: Todo = { id: this.nextId++, title, completed: false };
    this.todosSubject.next([...currentTodos, newTodo]);
  }

  toggleTodo(id: number): void {
    const updatedTodos = this.todosSubject.value.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todosSubject.next(updatedTodos);
  }

  deleteTodo(id: number): void {
    const filteredTodos = this.todosSubject.value.filter(todo => todo.id !== id);
    this.todosSubject.next(filteredTodos);
  }
}

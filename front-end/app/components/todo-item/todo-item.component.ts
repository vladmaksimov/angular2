import {Component, Input} from "@angular/core";
import {Todo} from "./../../models/todo.model";
import {TodoService} from "./../../services/todo.service";

@Component({
    selector: 'todo-item',
    templateUrl: './app/components/todo-item/todo-item.component.html',
    styleUrls: ['./app/components/todo-item/todo-item.component.css']
})
export class TodoItem {
    @Input() todo:Todo;

    constructor(private todoService:TodoService) {
    }

    toggleDone():void {
        this.todo.done = !this.todo.done;
    }

    delete():void {
        this.todoService.removeTodo(this.todo);
    }
}
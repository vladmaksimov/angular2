/**
 * Created on 12.08.16.
 */

import {Component} from "@angular/core";
import {Todo} from "./../../models/todo.model";
import {TodoService} from "./../../services/todo.service";

@Component({
    selector: 'todo-form',
    templateUrl: './app/components/todo-form/todo-form.component.html',
    styleUrls: ['./app/components/todo-form/todo-form.component.css']
})

export class TodoFormComponent {

    constructor(private todoService:TodoService) {
    }

    add(input:HTMLInputElement) {
        if (input) {
            let value:string = input.value;
            if (value) {
                this.todoService.addTodo(new Todo(value));
            }
            input.value = '';
        }
    }

}

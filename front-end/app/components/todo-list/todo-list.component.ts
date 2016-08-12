import {Component, OnInit} from "@angular/core";
import {ITodo} from "./../../models/todo.model";
import {TodoItem} from "./../todo-item/todo-item.component";
import {TodoService} from "./../../services/todo.service";


@Component(<any>{
    selector: 'todo-list',
    templateUrl: './app/components/todo-list/todo-list.component.html',
    styleUrls: ['./app/components/todo-list/todo-list.component.css'],
    directives: [TodoItem]
})
export class TodoListComponent implements OnInit {
    todoList:ITodo[];

    constructor(private todoService:TodoService) {
        this.todoList = [];
    }

    ngOnInit() {
        this.todoService.getTodoList().then((data) => {
            console.log(data);
            this.todoList = data;
        });
    }

    get sortedTodoList():ITodo[] {
        return this.todoList
            .map((todo:ITodo) => todo)
            .sort((a, b) => {
                let testA:string = a.title.toLowerCase();
                let testB:string = b.title.toLowerCase();
                return testA < testB ? -1 : testA > testB ? 1 : 0;
            })
            .sort((a, b) => {
                return a.done && !b.done ? 1 : !a.done && b.done ? -1 : 0;
            })
    }
} 

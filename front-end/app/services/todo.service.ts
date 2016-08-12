import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {todos} from "./../models/todo.data";
import {ITodo} from "../models/todo.model";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/catch";

@Injectable()
export class TodoService {

    constructor(private http:Http) {
    }

    public getTodoList() {
        return this.http.get('/todos/get/all').toPromise().then(res => res.json());
    }

    public addTodo(todo:ITodo):void {
        this.http.post('/todos/put', todo).toPromise().then((res) => res.json());
    }

    public removeTodo(todo:ITodo):void {
        if (todo) {
            let index:number = todos.indexOf(todo);
            if (index > -1) {
                todos.splice(index, 1);
            }
        }
    }

}
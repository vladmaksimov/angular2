import {Component} from "@angular/core";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoFormComponent} from "./components/todo-form/todo-form.component";
import {TodoService} from './services/todo.service';



@Component(<any>{
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoListComponent, TodoFormComponent],
    providers: [TodoService]
})

export class AppComponent {
    title:string;

    constructor() {
        this.title = "Angular 2 ToDo list";
    }
}

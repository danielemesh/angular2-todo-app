import { Component } from '@angular/core';
import {Todo} from "./components/todos/todo";

@Component({
    selector: "todo-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {
    title: string = "TodoApp";
}

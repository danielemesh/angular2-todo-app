import { Component } from "@angular/core";
import { Todo } from "./todo";
import { TodosService } from "./todos.service";

@Component({
    selector   : "todos",
    moduleId   : module.id,
    templateUrl: "./todos.component.html",
    providers: [ TodosService ],
    styleUrls: [ "./todos.component.css" ]
})

export class TodosComponent {
    todos: Todo[];
    selectedTodo: Todo;

    constructor(private todosService: TodosService) {}

    ngOnInit(): void {
        this.getTodos();
    }

    setSelected(todo: Todo) {
        this.selectedTodo = todo;
    }

    getTodos(): void {
        this.todosService.getTodos()
            .then(todos => this.todos = todos);
    }

    addTodo(todoTitle): void {
        this.todosService.addTodo(todoTitle).then(todo => this.todos.push(todo));
    }

    deleteTodo(todo: Todo) {
        this.todos = this.todos.filter(item => {
            return item.id !== todo.id;
        });
    }
}
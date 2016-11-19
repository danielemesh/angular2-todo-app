import { Injectable } from "@angular/core"
import { Todo } from "./todo";
import { TODOS } from "./mock-todos";

@Injectable()
export class TodosService {

    nextID: number;

    constructor() {
        this.nextID = 4;
    }

    getTodos(): Promise<Todo[]> {
        return Promise.resolve(TODOS);
    }

    getTodo(id: number): Promise<Todo> {
        return this.getTodos()
            .then(todos => todos.find(todo => todo.id === id));
    }

    addTodo(title: string): Promise<Todo> {
        let todo = {
            id: ++this.nextID,
            title: title,
            description: "",
            completed: false
        };

        return Promise.resolve(todo);
    }
}
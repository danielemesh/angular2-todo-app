import {Component, Input} from "@angular/core";
import {Todo} from "./todo";

@Component({
    selector: "todo-details",
    moduleId: module.id,
    templateUrl: "./todo-details.component.html"
})

export class TodoDetailsComponent {
    @Input() todo: Todo;
}
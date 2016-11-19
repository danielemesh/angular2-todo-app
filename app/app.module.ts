import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { TodosComponent } from "./components/todos/todos.component";
import {TodoDetailsComponent} from "./components/todos/todo-details.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        TodosComponent,
        TodoDetailsComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

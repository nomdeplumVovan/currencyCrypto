import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddSetComponent } from './add-set/add-set.component';
import { TodosService } from './todos.service';
import { TaskComponent } from './task/task.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    AddSetComponent,
    TaskComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddSetComponent } from './add-set/add-set.component';
import { SetComponent } from './set/set.component';
import { TodosService } from './todos.service';
import { TaskaComponent } from './add-set/taska/taska.component';
import { TaskComponent } from './task/task.component';
import { DelayDirective } from './delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddSetComponent,
    SetComponent,
    TaskaComponent,
    TaskComponent,
    DelayDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

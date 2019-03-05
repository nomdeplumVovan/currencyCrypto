import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddSetComponent } from './add-set/add-set.component';
import { TodosService } from './todos.service';
import { TaskComponent } from './task/task.component';
import { TimerComponent } from './timer/timer.component';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    AddSetComponent,
    TaskComponent,
    TimerComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule ,
    MatCheckboxModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

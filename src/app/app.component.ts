import { Component, OnInit, Input } from '@angular/core';

import { TodosService, Taska } from './todos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public currentTask: Taska;
  public isSorted: Boolean = false;
  public selectedProjectName: string;
  public isEdit: Boolean = false;
  public visibleAdd: String = 'hidden';



  constructor(private todosService: TodosService) { }

  @Input() priority; title; project; textarea; id;


  getTodos() {
    let items = this.todosService.getItems();
    if (this.selectedProjectName) {
      items = this.todosService.getTasksByProjectName(this.selectedProjectName);
    }
    if (this.isSorted) {
      items = this.todosService.getTasksSortedByPriority(items);
    }
    return items;
  }


  toggleVisibilityEditArea() {
    return this.todosService.toggleTodosVisibilityEditArea();
  }

  toggleSortTodosByPriority() {
    this.isSorted = !this.isSorted;
  }

  getTodosProjectNames() {
    return this.todosService.getProjectNames();
  }

  selectByProjectName(selectedProjectName: string) {
    this.selectedProjectName = selectedProjectName;
  }

  updateTask() {
    return function (task: Taska) {
      this.currentTask = task;
      this.isEdit = true;
      this.visibleAdd = 'visible';
    }.bind(this);
  }

  createTask() {
      this.currentTask = new Taska();
      this.isEdit = false;
      this.visibleAdd = 'visible';
  }

  saveTodo() {
    return (task: Taska) => {
      if (this.isEdit) {
        this.visibleAdd = 'hidden';
        this.todosService.saveToLocalStorage();
      } else {
        this.id = (new Date().getTime()).toString(36);
        this.todosService.addTask(task.priority, task.title, task.project, task.textarea, this.id);
        this.visibleAdd = 'hidden';
      }
    };
  }

  reset() {
    return () => {
      this.currentTask = null;
      this.visibleAdd = 'hidden';
    };
  }

  ngOnInit() {

  }
}


import { Component, OnInit, Input } from '@angular/core';

import { TodosService, Taska } from './todos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // public taskSort: [];
  // public title: string;
  // public project: string;
  // public textarea: string;

  public currentTask: Taska;
  public isSorted: Boolean = false;
  public selectedProjectName: string;
  public isEdit: Boolean = false;
  public visibleAdd: String = 'hidden';
  // public id: any = '';


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
    this.visibleAdd = this.visibleAdd === 'hidden' ? 'visible' : 'hidden';
    return this.todosService.toggleTodosVisibilityEditArea();
  }

  toggleSortTodosByPriority() {  // сортирует отображение Taska по приоритету
    this.isSorted = !this.isSorted;
  }

  getTodosProjectNames() { // возвращает уникальные имена проектов getTodosProjectNames()
    return this.todosService.getProjectNames();
  }

  selectByProjectName(selectedProjectName: string) {  // выбраное имя проекта selectByProjectName()
    this.selectedProjectName = selectedProjectName;
  }

  updateTask() {
    return function (task: Taska) {
      this.currentTask = task;
      this.isEdit = true;
      this.visibleAdd = 'visible';
      console.log('UpdateTask', this.currentTask, this.isEdit);
    }.bind(this);
  }

  createTask() {
    this.currentTask = new Taska();
    this.isEdit = false;
    console.log('CreateTask', this.currentTask, this.isEdit);
    this.toggleVisibilityEditArea();
  }

  saveTodo() {
    return (task: Taska) => {
      if (this.isEdit) {
        this.todosService.edit(task);
        this.visibleAdd = 'hidden';
        console.log('getProjectId', this.todosService.getProjectId());
      } else {
        this.id = (new Date().getTime()).toString(36);
        this.todosService.addTask(this.priority, this.title, this.project, this.textarea, this.id);
        this.visibleAdd = 'hidden';
        console.log('getCreatedProjectId', this.todosService.getProjectId());
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


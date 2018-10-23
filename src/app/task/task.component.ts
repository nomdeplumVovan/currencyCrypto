import { Component, OnInit, Input, Output } from '@angular/core';
import { Taska, TodosService } from '../todos.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // public visibility: String = 'hidden';
  public display: String = 'none';
  public i: number;
  @Input() task: Taska;
  @Input() updateTask: Function;
  @Output() selectedTaska: Taska;

  constructor(private todosService: TodosService) { }

  remove(task) {
    return this.todosService.remove(task);
  }

  toggleVisibilityTextArea() {
    this.display = this.display === 'none' ? 'block' : 'none';
  }

  ngOnInit() {
  }

}

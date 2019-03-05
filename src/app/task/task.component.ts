import { Component, OnInit, Input, Output } from '@angular/core';
import { Taska, TodosService } from '../todos.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  public display: String = 'none';

  @Input() task: Taska;
  @Input() updateTask: Function;
  @Input() eng: Boolean;
  @Input() rus: Boolean;
  @Input() ukr: Boolean;
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

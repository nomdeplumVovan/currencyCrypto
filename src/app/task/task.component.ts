import { Component, OnInit, Input, Output } from '@angular/core';
import { Taska, TodosService } from '../todos.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public visibility: String = 'hidden';
  // public selectedTaska: Taska;
  public i: number;
  @Input() task: Taska;
  @Input() updateTask: Function;
  @Output() selectedTaska: Taska;

  constructor(private todosService: TodosService) { }


  // selectTaska(selectedTaska: Taska) {     // возвращает выбранный Taska;
  //   this.selectedTaska = selectedTaska;
  //   console.log(selectedTaska);
  //   // this.todosService.visibleAdd = 'visible';
  //   this.todosService.editTaska(selectedTaska);
  // }

  close() { }

  toggleVisibilityTextArea() {         // раскрывает/скрывает описание проекта в Taska
    this.visibility = this.visibility === 'hidden' ? 'visible' : 'hidden';
  }

  ngOnInit() {
  }

}

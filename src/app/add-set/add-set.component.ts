import { Component, OnInit, Input, Output } from '@angular/core';
import { TodosService, Taska } from '../todos.service';

@Component({
  selector: 'app-add-set',
  templateUrl: './add-set.component.html',
  styleUrls: ['./add-set.component.css']
})

export class AddSetComponent implements OnInit {
  public task: Taska;

  @Input() todo: Taska;
  @Input() eng: Boolean;
  @Input() rus: Boolean;
  @Input() ukr: Boolean;
  @Input() save: Function;
  @Input() reset: Function;
  @Input() items: Taska[];


  constructor(private todosService: TodosService) { }

  @Output() addTaskItem(priority: string, title: string, project: string, textarea: string, id: any) {
    this.todosService.addTask(priority, title, project, textarea, id);
    this.reset();
  }

  ngOnInit() {
  }

}

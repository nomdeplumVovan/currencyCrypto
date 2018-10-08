import { Component, OnInit, Input, Output } from '@angular/core';
import { TodosService, Taska } from '../todos.service';

// export class Taska {
//   constructor(public priority: string,
//     public title: string,
//     public project: string,
//     public textarea: string
//   ) { }
// }

@Component({
  selector: 'app-add-set',
  templateUrl: './add-set.component.html',
  styleUrls: ['./add-set.component.css']
})
export class AddSetComponent implements OnInit {
  public task: Taska;

  @Input() todo: Taska;
  @Input() save: Function;
  @Input() reset: Function;

   // addTaskItem: Function;

  constructor(private todosService: TodosService) { }

  @Output() addTaskItem(priority: string, title: string, project: string, textarea: string, id: any ) {
    this.todosService.addTask(priority, title, project, textarea, id);
    this.reset();
  }

  // editSetTaska(selectedTaska) {               // открывает окно редактирования "add-set" со значениями.

  //   this.priority = selectedTaska.priority;
  //   this.title = selectedTaska.title;
  //   this.project = selectedTaska.project;
  //   this.textarea = selectedTaska.textarea;
  // }

  // reset_() {      // сбрасывает все инпуты и закрывает окно "add-set"
  //   this.priority = '';
  //   this.title = '';
  //   this.project = '';
  //   this.textarea = '';
  //   this.todosService.toggleVisibilityEditArea();
  // }



  ngOnInit() {
  }

}

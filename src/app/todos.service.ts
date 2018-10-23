import { Injectable, Output, Input } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class Taska {
  constructor(
    public priority: String = ' ',
    public title: String = '',
    public project: String = '',
    public textarea: String = '',
    public id: String = ''
  ) { }
}

export class TodosService {
  // public taskSort: any;
  public tasks: Taska [] = [];
  public task: Taska;
  // public editedTasks: Taska[];
  public visibleAdd: String = 'visible';

  @Input() reset: Function;

  constructor() {
    this.tasks = this
      .getFromLocalStorage()
      .map(t => new Taska(t.priority, t.title, t.project, t.textarea, t.id));
  }

  getItems(): Taska[] {
    return this.tasks.slice();
  }

  addTask(priority, title, project, textarea, id) {
    this.tasks.push(new Taska(priority, title, project, textarea, id));
    this.saveToLocalStorage();
  }

  // edit(task: Taska) {
  //   this.addTask(task.priority, task.title, task.project, task.textarea, task.id);

  // }

  toggleTodosVisibilityEditArea() {
    this.visibleAdd = this.visibleAdd === 'hidden' ? 'visible' : 'hidden';
  }

  saveToLocalStorage() {
    localStorage.setItem('key', JSON.stringify(this.tasks));
  }

  getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('key')) || [];
  }

  getTasksSortedByPriority(items: Taska[]) {
    const sorted = items || this.getItems();
    sorted.sort((a, b) => Number(a.priority) - Number(b.priority));
    return sorted;
  }

  getProjectNames() {
    return this
      .getItems()
      .reduce((names, todo) => {
        if (!names.includes(todo.project)) {
          names.push(todo.project);
        }
        return names;
      }, []);
  }

  getTasksByProjectName(projectName: string) {
    return this
      .getItems()
      .filter(todo => todo.project === projectName);
  }

  remove(todo: Taska) { // mocked todo -> { id: 'abcdqwer' }
    if (confirm('Вы хотите удалить задачу?')) {
    this.tasks = this.tasks.filter((t) => t.id !== todo.id); // mocked [{ id: 'abcdqwer' }, { id: 'abcdqwer1' }, { id: 'abcdqwer2' }];
    this.saveToLocalStorage();
    } // mocked empty function;
  }

}







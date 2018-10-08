import { Injectable, Output, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Taska {
  constructor(
    public priority: string = '4',
    public title: string = '',
    public project: string = '',
    public textarea: string = '',
    public id: any = ''
  ) { }
}

export class TodosService {
  public taskSort: any;
  public tasks: Taska[] = [];
  public task: Taska;
  // public selectedTaska: Taska;
  public editedTasks: Taska[];
  public visibleAdd: String = 'visible';

  @Input() reset: Function;

  constructor() {      // возвращает новый массив проектов
    // this.tasks:[object Object],[object Object],[object Object],[object Object]
    this.tasks = this
      .getFromLocalStorage()
      .map(t => new Taska(t.priority, t.title, t.project, t.textarea, t.id));
  }

  getItems(): Taska[] {
    return this.tasks.slice();    // возвращает массив всех Тaska
    // getItems:[object Object],[object Object],[object Object],[object Object]
  }

  addTask(priority, title, project, textarea, id) {
    this.tasks.push(new Taska(priority, title, project, textarea, id));
    this.saveToLocalStorage();     // добавляет  Тaska в LocalStorage
  }

  edit(task: Taska) {
    console.log('Edit Todo', task);
    this.addTask(task.priority, task.title, task.project, task.textarea, task.id);

  }

  toggleTodosVisibilityEditArea() {         // открывает/скрывает окно редактирования "add-set"
    this.visibleAdd = this.visibleAdd === 'hidden' ? 'visible' : 'hidden';
  }

  saveToLocalStorage() {
    localStorage.setItem('key', JSON.stringify(this.tasks));                 //  сохраняет JSON в LocalStorage
  }

  getFromLocalStorage() {                                                   //  выдает JSON из LocalStorage
    return JSON.parse(localStorage.getItem('key')) || [];
  }

  getTasksSortedByPriority(items: Taska[]) {       // сортирует  все Тaska  по приоритету
    // getTasksSortedByPriority:[object Object],[object Object],[object Object]
    const sorted = items || this.getItems();
    sorted.sort((a, b) => Number(a.priority) - Number(b.priority));
    return sorted;
  }

  getTasksSortedByID(items: Taska[]) {       // сортирует  все Тaska  по id
    // getTasksSortedByPriority:[object Object],[object Object],[object Object]
    const sortedID = items || this.getItems();
    sortedID.sort((a, b) => Number(a.id) - Number(b.id));
    console.log('sortedID', sortedID);
    return sortedID;
  }

  getProjectNames() {   // возвращает уникальные имена проекта getProjectNames()
    return this
      .getItems()
      .reduce((names, todo) => {
        if (!names.includes(todo.project)) {
          names.push(todo.project);
        }
        return names;
      }, []);
  }

  getProjectId() {
    return this
      .getItems()
      .reduce((ids, todo) => {
        if (!ids.includes(todo.id)) {
          ids.push(todo.id);
        }
        return ids;
      }, []);
  }

  getTasksByProjectName(projectName: string) { // возвращает проекты по уникальному имени getTasksByProjectName()[object Object]
    return this
      .getItems()
      .filter(todo => todo.project === projectName);
  }



}



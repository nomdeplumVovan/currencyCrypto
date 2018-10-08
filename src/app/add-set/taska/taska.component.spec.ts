import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskaComponent } from './taska.component';

describe('TaskaComponent', () => {
  let component: TaskaComponent;
  let fixture: ComponentFixture<TaskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

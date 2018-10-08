import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-taska',
  templateUrl: './taska.component.html',
  styleUrls: ['./taska.component.css']
})
export class TaskaComponent implements OnInit {

@Input() title; project; priority; textarea;
  constructor() { }

  ngOnInit() {
  }

}

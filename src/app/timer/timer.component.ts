import { Component, OnInit } from '@angular/core';

import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  o: any;
  time: any;

  constructor() { }

  showTime() {
    this.time = new Date().toLocaleTimeString();

    this.o = Observable.create((observer: Observer<string>) => {
      setInterval(_ => {
        observer.next(new Date().toLocaleTimeString());
      }, 1000);
    });

    this.o.subscribe({
      next: (value: string) => this.time = value,
      // complete: () => this.time = ''
    });
  }

  ngOnInit() {
    this.showTime();
  }
}

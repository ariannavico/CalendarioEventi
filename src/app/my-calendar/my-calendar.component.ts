import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
  styles: [`
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    border-radius: 0.25rem;
    display: inline-block;
    width: 2rem;
  }
  .custom-day:hover, .custom-day.focused {
    background-color: #e6e6e6;
  }
  .weekend {
    background-color: #f0ad4e;
    border-radius: 1rem;
    color: white;
  }
  .hidden {
    display: none;
  }
`]
})
export class MyCalendarComponent implements OnInit {

 
  constructor(private calendar: NgbCalendar) {
  }

   model: any

  /* isDisabled = (date: NgbDate, current: {year: number, month: number}) => date.month !== current.month; */
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;


  ngOnInit(): void {
  }

}

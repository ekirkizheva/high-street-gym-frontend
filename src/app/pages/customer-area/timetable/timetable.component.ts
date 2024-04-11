import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DAYS_OF_WEEK } from './days-of-weeek';
import { TIME_OF_THE_DAY } from './time-of-the-day';
import { TimetableEvent, TimetableService } from './timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent {

  public readonly daysOfWeek = DAYS_OF_WEEK;
  public readonly timeOfTheDay = TIME_OF_THE_DAY;

  public timetable$: Observable<TimetableEvent[]>;

  constructor(private timetableSerice: TimetableService) {
    this.timetable$ = this.timetableSerice.timetable$;
  }

  getEvent(timetable:TimetableEvent[], d: number, t: number): TimetableEvent | undefined {
    return timetable.find(({ weekday, time }) => (weekday === d && time === t));
  }

}

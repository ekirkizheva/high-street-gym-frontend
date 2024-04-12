import { Component } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { TIME_OF_THE_DAY } from '../timetable/time-of-the-day';
import { BookingService } from './booking.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  readonly timeOfTheDay = TIME_OF_THE_DAY;

  date: any;
  time: any;
  trainer: any;

  availability$: Observable<any>;
  myBookings$: Observable<any>;
  updateSubject: Subject<void> = new Subject<void>();

  constructor(private bookingService: BookingService) {
    this.availability$ = this.updateSubject.pipe(
      switchMap(() => this.bookingService.availability$(this.date, this.time))
    ); 

    this.myBookings$ = this.updateSubject.pipe(
      startWith(null),
      switchMap(() => this.bookingService.myBookings$)
    );
  }

  pastDatesFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    // Prevent Saturday and Sunday from being selected.
    return day >= new Date();
  };
  
  onChange() {
    console.log(this.date, this.time);
    if (this.date && this.time){
      this.updateSubject.next();
    }
  }

  makeBooking() {
    this.bookingService.makeBooking$(this.date,this.time,this.trainer).subscribe(() => {
      this.updateSubject.next();
    })
  }
}

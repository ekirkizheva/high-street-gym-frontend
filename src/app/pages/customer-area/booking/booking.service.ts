import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }


  get myBookings$(): Observable<any> {
    return this.http.get<any>(`/api/authenticated/events`);
  }

  availability$(date:any, time:any): Observable<any> {
    return this.http.get<any>(`/api/authenticated/availability/${date}/${time}`);
  }

  makeBooking$(date:any, time:any, trainer: any): Observable<any> {
    return this.http.post<any>(`/api/authenticated/book`, {
      date,
      time,
      trainer
    });
  }

}

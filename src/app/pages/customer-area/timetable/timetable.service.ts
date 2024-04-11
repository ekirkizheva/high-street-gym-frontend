import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TimetableEvent {
  id: number;
  weekday: number;
  time: number;
  duration: number;
  level: string;
  class: {
    id: number,
    name: string
  },
  trainer: {
    id: number,
    name: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private http: HttpClient) { }

  get timetable$(): Observable<TimetableEvent[]> {
    return this.http.get<TimetableEvent[]>('/api/public/timetable');
  }

}

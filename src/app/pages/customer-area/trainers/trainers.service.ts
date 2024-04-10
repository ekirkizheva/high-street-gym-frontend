import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {
  constructor(private http: HttpClient) { }

  get trainers$(): Observable<{name: string}> {
    return this.http.get<{name: string}>('/api/public/trainers');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Blog = any;
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  get blog$(): Observable<Blog[]> {
    return this.http.get<Blog[]>('/api/authenticated/blog');
  }

  postBlog$(message: string): Observable<any> {
    return this.http.post('/api/authenticated/blog', {message});
  }
}

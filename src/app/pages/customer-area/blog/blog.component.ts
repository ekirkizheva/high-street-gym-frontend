import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, startWith, switchMap, take } from 'rxjs';
import { Blog, BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {


  blog$: Observable<Blog[]>;
  refreshSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  
  blogForm = this.fb.group({
    message: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService) {
    this.blog$ = this.refreshSubject$.pipe(
      switchMap(() => this.blogService.blog$.pipe(
        startWith([]) // hack to force page to scroll to the top
      )));
  }

  onSubmit() {
    if(this.blogForm.valid) {
      this.blogService.postBlog$(this.blogForm.get('message')?.value!)
        .pipe(take(1))
        .subscribe(() => {
          this.refreshSubject$.next(true);
          this.blogForm.reset();
        });
    }
  }
}

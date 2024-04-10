import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassesService } from './classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {
  classes$: Observable<any>;

  constructor(private classesService: ClassesService) {
    this.classes$ = this.classesService.classes$;
  }
}

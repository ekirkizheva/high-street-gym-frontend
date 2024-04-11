import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainersService } from './trainers.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent {
  trainers$: Observable<{name: string}[]>;

  constructor(private trainersService: TrainersService) {
    this.trainers$ = this.trainersService.trainers$;
  }
}

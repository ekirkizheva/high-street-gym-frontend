import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClassesComponent } from './classes/classes.component';
import { CustomerAreaRoutingModule } from './customer-area-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TimetableComponent } from './timetable/timetable.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    ClassesComponent,
    TrainersComponent,
    TimetableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerAreaRoutingModule,
    SharedModule
  ]
})
export class CustomerAreaModule { }

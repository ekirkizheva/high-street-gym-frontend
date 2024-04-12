import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { ClassesComponent } from './classes/classes.component';
import { CustomerAreaRoutingModule } from './customer-area-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TrainersComponent } from './trainers/trainers.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    ClassesComponent,
    TrainersComponent,
    TimetableComponent,
    BlogComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerAreaRoutingModule,
    SharedModule
  ]
})
export class CustomerAreaModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatOptionModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { BookingComponent } from './booking/booking.component';
import { ClassesComponent } from './classes/classes.component';
import { CustomerAreaRoutingModule } from './customer-area-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TrainersComponent } from './trainers/trainers.component';


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
    SharedModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-AU'},
  ],
})
export class CustomerAreaModule { }

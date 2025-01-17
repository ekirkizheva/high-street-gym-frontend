import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { memberGuard } from 'src/app/core/guards/member.guard';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './blog/blog.component';
import { BookingComponent } from './booking/booking.component';
import { ClassesComponent } from './classes/classes.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TrainersComponent } from './trainers/trainers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent, data: { banner: false, header: false, footer: false } },
  { path: 'classes', component: ClassesComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'blog', component: BlogComponent, canActivate: [memberGuard] },
  { path: 'booking', component: BookingComponent, canActivate: [memberGuard] },
  { path: 'account', component: AccountComponent },
  { path: 'contacts', component: ContactsComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerAreaRoutingModule { }

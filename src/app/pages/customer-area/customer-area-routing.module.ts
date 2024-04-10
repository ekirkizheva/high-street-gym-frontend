import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ClassesComponent } from './classes/classes.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrainersComponent } from './trainers/trainers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent, data: { banner: false, header: false, footer: false } },
  { path: 'classes', component: ClassesComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'account', component: AccountComponent },
  { path: 'contacts', component: ContactsComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerAreaRoutingModule { }

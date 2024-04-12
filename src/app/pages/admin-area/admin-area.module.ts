import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminAreaRoutingModule } from './admin-area.routing.module';
import { HomeComponent } from './home/home.component';
import { ManageUsersModifyComponent } from './manage-users-modify/manage-users-modify.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { XmlUploadComponent } from './xml-upload/xml-upload.component';

@NgModule({
  declarations: [
    HomeComponent,
    ManageUsersComponent,
    ManageUsersModifyComponent,
    XmlUploadComponent
  ],
  imports: [
    CommonModule,
    AdminAreaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminAreaModule { }

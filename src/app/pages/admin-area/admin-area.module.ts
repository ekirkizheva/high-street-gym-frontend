import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminAreaRoutingModule } from './admin-area.routing.module';
import { ChangeLogComponent } from './change-log/change-log.component';
import { HomeComponent } from './home/home.component';
import { ManageProductsModifyComponent } from './manage-products-modify/manage-products-modify.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUsersModifyComponent } from './manage-users-modify/manage-users-modify.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { XmlUploadComponent } from './xml-upload/xml-upload.component';

@NgModule({
  declarations: [
    HomeComponent,
    ChangeLogComponent,
    ManageUsersComponent,
    ManageProductsComponent,
    ManageUsersModifyComponent,
    ManageProductsModifyComponent,
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

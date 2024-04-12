import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageUsersModifyComponent } from './manage-users-modify/manage-users-modify.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { XmlUploadComponent } from './xml-upload/xml-upload.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'manage-users', component: ManageUsersComponent},
    { path: 'manage-users/add', component: ManageUsersModifyComponent},
    { path: 'manage-users/:id', component: ManageUsersModifyComponent},
    { path: 'xml-upload', component: XmlUploadComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminAreaRoutingModule { }

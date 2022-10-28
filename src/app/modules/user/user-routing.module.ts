import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: "full" },
  { path: '', component: UserProfileComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

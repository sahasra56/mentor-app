import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserVerificationComponent } from './components/user-verification/user-verification.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-profile', pathMatch: "full" },
  { path: 'user-profile', component: UserProfileComponent},
  { path: 'user-verification', component: UserVerificationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

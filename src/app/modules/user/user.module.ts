import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserVerificationComponent } from './components/user-verification/user-verification.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserVerificationComponent,
    ProfilePictureComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }

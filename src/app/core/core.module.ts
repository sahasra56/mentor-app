import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http-token.interceptor';

import { AppMaterialModule } from 'src/app/core/modules/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  HttpService,
  AuthService,
  AppConfigService,
  JwtService,
  UserService,
  InternetConnectionService
} from './services';

// import { NoResultsComponent } from './components/no-results/no-results.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    // NoResultsComponent
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    HttpService,
    AuthService,
    AuthGuard,
    AppConfigService,
    JwtService,
    UserService,
    InternetConnectionService
  ],
  declarations: [
    // NoResultsComponent
  ]
})
export class CoreModule { }

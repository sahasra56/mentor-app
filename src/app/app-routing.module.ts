import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards';

import { LoginComponent } from './modules/login/components/login/login.component';
import { RegisterUserComponent } from './modules/login/components/register-user/register-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'personality-test', loadChildren: () => import('./modules/personality-test/personality-test.module').then(m => m.PersonalityTestModule), canActivate: [AuthGuard] },
  { path: 'contact-us', loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule), canActivate: [AuthGuard] },
  { path: 'about-us', loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'events', loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule), canActivate: [AuthGuard] },
  { path: 'tasks', loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule), canActivate: [AuthGuard] },
  { path: 'articles', loadChildren: () => import('./modules/articles/articles.module').then(m => m.ArticlesModule), canActivate: [AuthGuard] },
  { path: 'podcasts', loadChildren: () => import('./modules/podcast/podcast.module').then(m => m.PodcastModule), canActivate: [AuthGuard] },
  { path: 'question-and-answer', loadChildren: () => import('./modules/question-and-answer/question-and-answer.module').then(m => m.QuestionAndAnswerModule), canActivate: [AuthGuard] },
  // { path: 'calendar', loadChildren: () => import('./modules/calendar/calendar.module').then(m => m.CalendarModule) },

  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
  { path: 'error', loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule) },
  // { path: '**', loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

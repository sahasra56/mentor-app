import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalityTestComponent } from './components/personality-test/personality-test.component';
import { PersonalityTestResultComponent } from './components/personality-test-result/personality-test-result.component';

const routes: Routes = [
  { path: '', redirectTo: 'personality-test', pathMatch: 'full' },
  { path: 'personality-test', component: PersonalityTestComponent },
  { path: 'personality-test-result', component: PersonalityTestResultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalityTestRoutingModule { }

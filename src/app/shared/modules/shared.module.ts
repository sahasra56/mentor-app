import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/core/modules/app-material.module';

import { AddTaskComponent } from 'src/app/shared/components/add-task/add-task.component';
import { BottomSheetComponent } from 'src/app/shared/components/bottom-sheet/bottom-sheet.component';
import { EventComponent } from 'src/app/shared/components/event/event.component';
import { TopicComponent } from 'src/app/shared/components/topic/topic.component';

import { EllipsisPipe } from '../pipes/ellipsis.pipe';

// import { AccessControlDirective } from 'src/app/core/directives/access-control.directive';

@NgModule({
    declarations: [
      AddTaskComponent,
      BottomSheetComponent,
      EventComponent,
      EllipsisPipe,
      TopicComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      ReactiveFormsModule,
      AppMaterialModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      AppMaterialModule,
      AddTaskComponent,
      EventComponent,
      EllipsisPipe,
      TopicComponent
    ],
    providers: [ ]
  })
  export class SharedModule { }
  
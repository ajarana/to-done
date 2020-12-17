import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskDetailsComponent } from './task-details/task-details.component';


@NgModule({
  declarations: [TaskDetailsComponent],
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskModule { }

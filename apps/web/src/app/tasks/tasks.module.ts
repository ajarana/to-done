import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  exports: [
    TaskListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksModule { }

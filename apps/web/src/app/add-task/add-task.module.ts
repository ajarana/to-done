import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTaskRoutingModule } from './add-task-routing.module';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  declarations: [TaskFormComponent],
  imports: [
    CommonModule,
    AddTaskRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddTaskModule { }

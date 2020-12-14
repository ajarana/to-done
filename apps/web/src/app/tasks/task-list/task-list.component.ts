import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../shared/task.service';

@Component({
  selector: 'nxlp-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks();
  }

}

import { 
  Component, 
  OnInit,
  HostListener
} from '@angular/core';
import { TaskService } from './../../shared/task.service';
import { Task } from './../../task';
import { Router } from '@angular/router';

@Component({
  selector: 'nxlp-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  @HostListener('tdButtonClicked', ['$event'])
  taskAddedHandler(event: any) {
    this.router.navigate(['/add-task'])
  }

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {    
    this.tasks = await this.taskService.getTasks();
  }

}

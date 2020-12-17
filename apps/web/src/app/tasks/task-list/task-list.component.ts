import { 
  Component, 
  OnInit,
  HostListener
} from '@angular/core';
import { TaskService } from './../../shared/task.service';
import { LabelService } from './../../shared/label.service';
import { Task } from './../../task';
import { Label } from './../../label';
import { Router } from '@angular/router';

@Component({
  selector: 'nxlp-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  labels: Label[] = [];

  @HostListener('tdButtonClicked', ['$event'])
  tdButtonClickedHandler(event: any) {
    this.router.navigate(['/add-task']);
  }

  @HostListener('taskSelected', ['$event'])
  taskSelectedHandler(event: any) {
    const id = event.detail;

    this.router.navigate(['/task', id]);
  }

  constructor(
    private taskService: TaskService,
    private labelService: LabelService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {    
    const [
      tasks,
      labels
    ] = await Promise.all([
      this.taskService.getTasks(),
      this.labelService.getLabels()
    ]);

    this.tasks = tasks;
    this.labels = labels;
  }

  // navigateToTask(id: string) {
  //   this.router.navigate(['/task', id]);
  // }

}

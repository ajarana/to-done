import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from './../../task';
import { TaskService } from './../../shared/task.service';
import { LabelService } from './../../shared/label.service';
import { Label } from './../../label';

@Component({
  selector: 'nxlp-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  labels: Label[] = [];
  headerCopy: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private labelService: LabelService,
  ) { }

  @HostListener('taskEdit', ['$event'])
  taskEditHandler(event: any) {
    const {
      id
    } = event.detail;

    this.router.navigate(['/task', id, "edit"]);
  }

  @HostListener('taskMarkedComplete', ['$event'])
  async taskMarkedCompleteHandler(event: any) {
    const {
      id,
      data
    } = event.detail;    
      await this.taskService.setTask(id, data);

      this.task = await this.taskService.getTask(id);
  }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');

    const [
      task,
      labels
    ] = await Promise.all([
      this.taskService.getTask(id),
      this.labelService.getLabels()
    ]);

    const {
      name
    } = task;

    this.headerCopy = name;
    this.task = task;
    this.labels = labels;
  }

}

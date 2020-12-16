import { Component, OnInit,
  HostListener
} from '@angular/core';
import { TaskService } from './../../shared/task.service';
import { LabelService } from './../../shared/label.service';
import { StorageService } from './../../shared/storage.service';
import { Task } from './../../task';
import { Label } from './../../label';

@Component({
  selector: 'nxlp-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  labels: Label[] = [];

  @HostListener('taskAdded', ['$event'])
  taskAddedHandler(event: any) {
      const formFields = event.detail;

      this.upload(formFields);
  }

  constructor(
    private taskService: TaskService,
    private labelService: LabelService,
    private storageService: StorageService
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

  async upload(formFields: any) {
    const {
      thumbnail: file
    } = formFields;

    let taskFields = formFields;

    if (file) {
      const fileRef = await this.storageService.upload(file);

      const thumbnailUrl = await fileRef.getDownloadURL();
  
      taskFields = Object.assign(formFields, { thumbnailUrl });
    }

    this.taskService.addTask(taskFields);
  }

}

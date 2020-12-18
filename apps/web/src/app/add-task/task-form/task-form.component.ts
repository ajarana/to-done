import { 
  Component, 
  OnInit,
  HostListener
} from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './../../shared/storage.service';
import { Task } from './../../task';
import { Label } from './../../label';
import { TaskService } from './../../shared/task.service';
import { LabelService } from './../../shared/label.service';

@Component({
  selector: 'nxlp-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  tasks: Task[];
  labels: Label[] = [];

  constructor(
    private taskService: TaskService,
    private labelService: LabelService,
    private storageService: StorageService,
    private router: Router
  ) { }

  @HostListener('taskChanged', ['$event'])
  taskChangedHandler(event: any) {
    const formFields = event.detail;

    this.upload(formFields);
  }

  @HostListener('taskDeleted', ['$event'])
  async taskDeletedHandler(event: any) {
    this.router.navigate(['/tasks']);
  }

  @HostListener('taskCancelled', ['$event'])
  taskCancelledHandler(event: any) {
    this.router.navigate(['/tasks']);
  }

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

  async upload({
    name, 
    thumbnail: file,
    description,
    labels,
    dueDate,
    notes
  }) {
    let thumbnailUrl = "";

    if (file) {
      const fileRef = await this.storageService.upload(file);

      thumbnailUrl = await fileRef.getDownloadURL();
    }

    const fields = {
      name, 
      thumbnailUrl,
      description,
      labels,
      dueDate,
      notes
    };

    this.taskService.addTask(fields);
  }

}

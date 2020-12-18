import { 
  Component, 
  OnInit,
  HostListener
} from '@angular/core';
import { TaskService } from './../../shared/task.service';
import { LabelService } from './../../shared/label.service';
import { Label } from './../../label';
import { Task } from './../../task';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from './../../shared/storage.service';

@Component({
  selector: 'nxlp-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.scss']
})
export class EditTaskFormComponent implements OnInit {
  task: Task;
  labels: Label[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private labelService: LabelService,
    private storageService: StorageService,
  ) { }

  @HostListener('taskChanged', ['$event'])
  taskChangedHandler(event: any) {
    const formFields = event.detail;

    this.upload(formFields);
  }

  @HostListener('taskDeleted', ['$event'])
  async taskDeletedHandler(event: any) {
    const id = event.detail && event.detail.id;

    await this.taskService.deleteTask(id);

    this.router.navigate(['/tasks']);
  }

  @HostListener('taskCancelled', ['$event'])
  taskCancelledHandler(event: any) {
    this.router.navigate(['/tasks']);
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

    this.task = task;
    this.labels = labels;
  }

  async upload({
    id,
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
      ...(name && {name}), 
      ...(thumbnailUrl && {thumbnailUrl}),
      ...(description && {description}),
      ...(labels && {labels}),
      ...(dueDate && {dueDate}),
      ...(notes && {notes}),
    };

    this.taskService.setTask(id, fields);
  }

}

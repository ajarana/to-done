import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { TasksModule } from '../tasks/tasks.module';
import { Task } from './../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  async getTasks() {
    const db = firebase.firestore();

    const querySnapshot = await db.collection("tasks")
    .orderBy("createdAt")
    .get();

    return querySnapshot
    .docs.map(doc => doc.data() as Task);
  }

  async addTask({
    name, 
    thumbnailUrl = "",
    description,
    labels,
    dueDate,
    notes
  }){   
    const db = firebase.firestore();

    await db.collection("tasks").add({
      name,
      thumbnailUrl,
      description,
      labels,
      dueDate,
      notes,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    console.log("Added doc!")
  }

  async setTask() {
    
  }

}

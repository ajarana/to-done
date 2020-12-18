import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Task } from './../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  db = firebase.firestore();

  tasks: Task[] = [];

  constructor() { }

  async getTasks() {
    const querySnapshot = await this.db.collection("tasks")
    .orderBy("createdAt")
    .get();

    return querySnapshot
    .docs.map(doc => doc.data() as Task);
  }

  async getTask(id: string) {
    const doc = await this.db.collection("tasks").doc(id)
    .get();

    return doc.data() as Task;
  }

  async addTask(fields) {
    const ref = this.db.collection("tasks").doc();

    const data = Object.assign(fields, { 
      id: ref.id,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      complete: false
    });

    await ref.set(data);

    console.log("Added task!");
  }

  async setTask(id: string, data: any) {
    const ref = this.db.collection("tasks").doc(id);

    await ref.set(data, { merge: true });

    console.log("Set task!");

    return data;
  }

  async deleteTask(id: string) {
    const doc = await this.db.collection("tasks").doc(id)
    .delete();

    console.log("Task deleted!");
  }

}

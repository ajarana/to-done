import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  getTasks() {
    const db = firebase.firestore();

    db.collection("tasks").get().then(querySnapshot => {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });
  }
}

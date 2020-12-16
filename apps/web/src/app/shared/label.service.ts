import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor() { }

  async getLabels() {
    const db = firebase.firestore();

    const doc = await db.collection("labels").doc("l3xMsk3YbdNiGGLM74LZ").get();

    return doc.data().labels;
  }

}

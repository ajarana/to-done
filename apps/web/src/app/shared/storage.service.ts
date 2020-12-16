import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async upload(file) {
    //Emergency TODO: ensure you're only uploading images.
    const {
      name
    } = file;

    const storageRef = firebase.storage().ref();

    const fileRef = storageRef.child(name);

    try {
      await fileRef.put(file);

      console.log("Upload successful!");

      return fileRef;
    }
    catch(error) {
      console.log("There was an error while uploading: ", error);
    }
    
  }

}

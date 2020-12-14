import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async signIn() {
    try {
      await firebase.auth().signInAnonymously();

      console.log('Signed in successfully!');
    }
    catch(error) {
      console.log("Error signing in anonymously: ", error);
    }

  }

  initAuthStateListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {      
        const {
          uid
        } = user;

        console.log(`User %c${uid}` + " %cis signed in.", "color: red", "");
      } else {
        console.log("User signed out.");
      }
    });
  }
}

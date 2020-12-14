import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { AuthService } from './shared/auth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'tdn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  async ngOnInit() {
    const {
      firebaseConfig = {}
    } = environment;

    firebase.initializeApp(firebaseConfig);

    this.authService.signIn();

    this.authService.initAuthStateListener();
  }
}

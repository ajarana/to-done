import { Component, OnInit, HostListener } from '@angular/core';
import { environment } from './../environments/environment';
import { AuthService } from './shared/auth.service';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'tdn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  @HostListener('goHome', ['$event'])
  taskEditHandler(event: any) {
    // TODO: Only navigates to current route. Change the behavior here once more requirements come in.

    this.router.navigate(["/tasks"]);
  }

  async ngOnInit() {
    // TODO: Sign in with different authentication method to enable users to access their data across different devices. 
    // TODO: Figure out a workflow to allow users to work offline, and sync their data once they're back online.

    const {
      firebaseConfig = {}
    } = environment;

    firebase.initializeApp(firebaseConfig);

    this.authService.initAuthStateListener();
  }
}

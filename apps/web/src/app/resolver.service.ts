import { Injectable } from '@angular/core';
import {
  Router, 
  Resolve
} from '@angular/router';

import { AuthService } from './shared/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ResolverService implements Resolve<void>{
  constructor(private authService: AuthService, private router: Router) {}

  resolve(): Promise<void> {

    return this.authService.signIn().then(() => {
      console.log("Resolved.");
    })
  }
}
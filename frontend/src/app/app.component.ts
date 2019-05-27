import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser: any;
  currentUserSubscription: Subscription;
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(private router: Router, private authService: AuthService, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 36rem)');
    // this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.currentUserSubscription = this.authService.currentUser.subscribe((user: any) => {
      this.currentUser = user;
    });
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  returnUrl(rol: string) {
    this.authService.returnUrl(rol);
  }
}

import {
  Component,
  ViewEncapsulation,
  Inject,
  ApplicationRef
} from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { LoginService } from '../services/login-service';
import { RioAboutPage } from './about-page';
import { RioCounterPage } from './counter-page';

import {
  RioButton,
  RioContainer,
  RioNavigator,
  RioNavigatorItem,
  RioLogo,
  RioLoginModal
} from '../components';

@Component({
  selector: 'rio-sample-app',
  providers: [LoginService],
  directives: [
    ROUTER_DIRECTIVES, RioNavigator, RioNavigatorItem,
    RioLoginModal, RioLogo, RioButton, RioContainer
  ],
  // Global styles imported in the app component.
  encapsulation: ViewEncapsulation.None,
  styles: [require('../styles/index.css')],
  template: `
    <div>
      <rio-login-modal
        (onSubmit)="login($event)"
        [hasError]="hasError"
        [isPending]="isLoading"
        *ngIf="!isLoggedIn"></rio-login-modal>
      <rio-navigator>
        <rio-navigator-item [mr]=true>
          <rio-logo></rio-logo>
        </rio-navigator-item>
        <rio-navigator-item *ngIf="isLoggedIn" [mr]=true>
          <a [routerLink]="['Counter']"
            class="text-decoration-none">Counter</a>
        </rio-navigator-item>
        <rio-navigator-item *ngIf="isLoggedIn">
          <a [routerLink]="['About']"
            class="text-decoration-none">About Us</a>
        </rio-navigator-item>
        <div class="flex flex-auto"></div>
        <rio-navigator-item *ngIf="isLoggedIn" [mr]=true>
          {{user.firstName + ' ' + user.lastName }}
        </rio-navigator-item>
        <rio-navigator-item [hidden]="!isLoggedIn">
          <rio-button class="bg-red white" (click)="logout()" >
            Logout
          </rio-button>
        </rio-navigator-item>
      </rio-navigator>
      <rio-container>
        <router-outlet *ngIf="isLoggedIn"></router-outlet>
      </rio-container>
    </div>
  `
})
@RouteConfig([
  {
    path: '/counter',
    name: 'Counter',
    component: RioCounterPage,
    useAsDefault: true
  },
  {
    path: '/about',
    name: 'About',
    component: RioAboutPage
  }
])
export class RioSampleApp {
  private isLoggedIn: Boolean;
  private isLoading: Boolean;
  private hasError: boolean;
  private user: any;

  constructor(private loginService: LoginService) { }

  logout(event) {
    this.isLoggedIn = false;
  }

  login(event) {
    this.isLoggedIn = false;
    this.isLoading = true;
    this.hasError = false;

    this.loginService
      .loginUser(event.username, event.password)
      .then((response: any) => {
        this.user = response.profile;
        this.isLoading = false;
        this.isLoggedIn = true;
      })
      .catch((error) => {
        this.isLoading = false;
        this.hasError = true;
      });
  }

};

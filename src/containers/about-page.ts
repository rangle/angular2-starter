import { Component } from '@angular/core';
import { RioContainerComponent } from '../components';

@Component({
  selector: 'sg-rio-about-page',
  directives: [ RioContainerComponent ],
  template: `
    <sg-rio-container>
      <h2 class="caps">About Us</h2>
      <p>
        Rangle.io is a next-generation HTML5 design and development firm
        dedicated to modern, responsive web and mobile applications.
      </p>
    </sg-rio-container>
  `
})
export class RioAboutPageComponent {}

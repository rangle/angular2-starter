import { Component } from 'angular2/core';
import { RioContainer } from '../components';

@Component({
  selector: 'rio-about-page',
  directives: [ RioContainer ],
  template: `
    <rio-container>
      <h2 class="caps">About Us</h2>
      <p>
        Rangle.io is a next-generation HTML5 design and development firm
        dedicated to modern, responsive web and mobile applications.
      </p>
    </rio-container>
  `
})
export class RioAboutPage {}

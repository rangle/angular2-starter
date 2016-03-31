import { Component, EventEmitter, Input, Output } from 'angular2/core';
import {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Control,
  Validators
} from 'angular2/common';

import { RioForm, RioFormError, RioFormGroup, RioLabel } from '../form';
import { RioAlert } from '../alert';
import { RioButton } from '../button';
import { RioInput } from '../form/input';

@Component({
  selector: 'rio-login-form',
  directives: [
    FORM_DIRECTIVES, RioAlert, RioButton, RioInput,
    RioForm, RioFormError, RioFormGroup, RioLabel
  ],
  template: `
    <rio-form
      [ngFormModel]="group"
      (ngSubmit)="handleSubmit()">
      <rio-alert status='info' *ngIf="isPending">Loading...</rio-alert>
      <rio-alert status='error' *ngIf="hasError">
        Invalid username and password
      </rio-alert>

      <rio-form-group>
        <rio-label>Username</rio-label>
        <rio-input
          inputType='text'
          placeholder='Username'
          [formControl]="username"></rio-input>
        <rio-form-error [visible]="showNameWarning()">
          Username required!
        </rio-form-error>
      </rio-form-group>

      <rio-form-group>
        <rio-label>Password</rio-label>
        <rio-input
          inputType='password'
          placeholder='Password'
          [formControl]="password"></rio-input>
        <rio-form-error [visible]="showPasswordWarning()">
          Password required!
        </rio-form-error>
      </rio-form-group>

      <rio-form-group>
        <rio-button
          className="mr1"
          type="submit">
          Login
        </rio-button>
        <rio-button className="bg-red"
          (onClick)="reset()">
          Clear
        </rio-button>
      </rio-form-group>
    </rio-form>
  `
})
export class RioLoginForm {
  @Input() isPending: boolean;
  @Input() hasError: boolean;
  @Output() onSubmit: EventEmitter<Object> = new EventEmitter();
  private username: Control;
  private password: Control;
  private group: ControlGroup;

  constructor(private builder: FormBuilder) {
    this.reset();
  }

  showNameWarning() {
    return this.username.touched
      && !this.username.valid
      && this.username.hasError('required');
  }

  showPasswordWarning() {
    return this.password.touched
      && !this.password.valid
      && this.password.hasError('required');
  }

  handleSubmit() {
    this.onSubmit.emit(this.group.value);
  }

  reset() {
    this.username = new Control('', Validators.required);
    this.password = new Control('', Validators.required);
    this.hasError = false;
    this.isPending = false;
    this.group = this.builder.group({
      username: this.username,
      password: this.password
    });
  }
};

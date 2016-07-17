import {
  async,
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder }
from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RioNavigatorComponent } from './navigator.component';
import { NgFormModel, ControlGroup, Control, FormBuilder }
from '@angular/common';


describe('Component: Navigator', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [RioNavigatorComponent]);
  beforeEach(inject([TestComponentBuilder],
    function (tcb: TestComponentBuilder) {
      builder = tcb;
    }));

  it('should inject the component', inject([RioNavigatorComponent],
    (component: RioNavigatorComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', async(inject([], () => {
    return builder.createAsync(RioNavigatorComponentTestComponent)
      .then((fixture: ComponentFixture<any>) => {
        fixture.autoDetectChanges();
        let query = fixture.debugElement
          .query(By.directive(RioNavigatorComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  })));
});

@Component({
  selector: 'rio-test',
  template: `
    <rio-navigator></rio-navigator>
  `,
  directives: [RioNavigatorComponent]
})
class RioNavigatorComponentTestComponent { }


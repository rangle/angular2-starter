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
import { RioButtonComponent } from './index';

describe('Component: Button', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [RioButtonComponent]);
  beforeEach(inject([TestComponentBuilder],
    function (tcb: TestComponentBuilder) {
      builder = tcb;
    })
  );

  it('should invoke handleClick when button is clicked',
    async(inject([], () => {
      return builder.createAsync(RioButtonComponent)
        .then((fixture: ComponentFixture<any>) => {
          spyOn(fixture.componentInstance, 'handleClick');
          fixture.detectChanges();
          let compiled = fixture.debugElement.nativeElement;
          compiled.querySelector('button').click();
          expect(fixture.componentInstance.handleClick).toHaveBeenCalled();
        });
    }))
  );

  it('should emit event when handleClick is invoked',
    async(inject([RioButtonComponent], (component: RioButtonComponent) => {
      component.onClick.subscribe(c => {
        expect(c.data).toEqual('test data');
      });
      let testEvent = { data: 'test data' };
      component.handleClick(testEvent);
    }))
  );

  it('should render the button with the correct class applied',
    async(inject([], () => {
      return builder.createAsync(RioButtonComponent)
        .then((fixture: ComponentFixture<any>) => {
          fixture.componentInstance.className = 'test-class';
          fixture.detectChanges();
          let compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('button')
            .getAttribute('class').split(' ')).toContain('test-class');
        });
    })
    )
  );
});

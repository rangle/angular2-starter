import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class HelloRoutingModule { }

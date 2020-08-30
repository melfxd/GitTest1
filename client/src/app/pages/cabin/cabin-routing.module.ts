import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabinComponent } from './cabin.component';

const routes: Routes = [
  {
    path: '',
    component: CabinComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinRoutingModule { }

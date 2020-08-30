import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinComponent } from './cabin.component';
import { CabinRoutingModule } from './cabin-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CabinRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CabinComponent
  ]
})
export class CabinModule { }

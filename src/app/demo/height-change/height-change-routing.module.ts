import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeightChangeComponent } from './height-change.component';

const routes: Routes = [
  {
    path: '',
    component: HeightChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeightChangeRoutingModule {}

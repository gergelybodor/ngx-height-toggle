import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentChangeComponent } from './content-change.component';

const routes: Routes = [
  {
    path: '',
    component: ContentChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentChangeRoutingModule {}

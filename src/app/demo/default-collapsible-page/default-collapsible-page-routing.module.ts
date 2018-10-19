import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultCollapsiblePageComponent } from './default-collapsible-page.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultCollapsiblePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultCollapsiblePageRoutingModule {}

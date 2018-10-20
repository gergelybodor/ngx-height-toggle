import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'default-collapsible',
    pathMatch: 'full'
  },
  {
    path: 'default-collapsible',
    loadChildren: './pages/default-collapsible-page/default-collapsible-page.module#DefaultCollapsiblePageModule'
  },
  {
    path: 'collapsible-in-collapsible',
    loadChildren: './pages/collapsible-in-collapsible-page/collapsible-in-collapsible-page.module#CollapsibleInCollapsiblePageModule'
  },
  {
    path: '**',
    redirectTo: 'default-collapsible'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}

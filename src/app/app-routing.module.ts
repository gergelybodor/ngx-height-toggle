import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'default-collapsible',
    pathMatch: 'full'
  },
  {
    path: 'default-collapsible',
    loadChildren: './demo/pages/default-collapsible-page/default-collapsible-page.module#DefaultCollapsiblePageModule'
  },
  {
    path: 'collapsible-in-collapsible',
    loadChildren: './demo/pages/collapsible-in-collapsible-page/collapsible-in-collapsible-page.module#CollapsibleInCollapsiblePageModule'
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
export class AppRoutingModule {}

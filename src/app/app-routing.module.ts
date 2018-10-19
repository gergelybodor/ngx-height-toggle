import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'getting-started',
    pathMatch: 'full'
  },
  {
    path: 'getting-started',
    loadChildren: './demo/getting-started/getting-started.module#GettingStartedModule'
  },
  {
    path: 'default-collapsible',
    loadChildren: './demo/default-collapsible-page/default-collapsible-page.module#DefaultCollapsiblePageModule'
  },
  {
    path: 'collapsible-in-collapsible',
    loadChildren: './demo/collapsible-in-collapsible-page/collapsible-in-collapsible-page.module#CollapsibleInCollapsiblePageModule'
  },
  {
    path: '**',
    redirectTo: 'getting-started'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

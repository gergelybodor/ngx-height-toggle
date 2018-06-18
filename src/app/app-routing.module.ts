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
    path: 'height-change',
    loadChildren: './demo/height-change/height-change.module#HeightChangeModule'
  },
  {
    path: 'content-change',
    loadChildren: './demo/content-change/content-change.module#ContentChangeModule'
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

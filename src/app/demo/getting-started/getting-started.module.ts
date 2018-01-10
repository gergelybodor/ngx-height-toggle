import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrismModule } from '@ngx-prism/core';
import { GettingStartedRoutingModule } from './getting-started-routing.module';

import { GettingStartedComponent } from './getting-started.component';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    GettingStartedRoutingModule
  ],
  declarations: [GettingStartedComponent]
})
export class GettingStartedModule {}

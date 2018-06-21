import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrismModule } from '@ngx-prism/core';
import { HeightChangeRoutingModule } from './height-change-routing.module';
import { NgxHeightToggleModule } from 'lib/ngx-height-toggle.module';

import { HeightChangeComponent } from './height-change.component';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    HeightChangeRoutingModule,
    NgxHeightToggleModule
  ],
  declarations: [HeightChangeComponent]
})
export class HeightChangeModule {}

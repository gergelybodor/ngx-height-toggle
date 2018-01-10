import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrismModule } from '@ngx-prism/core';
import { ContentChangeRoutingModule } from './content-change-routing.module';
import { NgxHeightToggleModule } from '../../modules/ngx-height-toggle/ngx-height-toggle.module';

import { ContentChangeComponent } from './content-change.component';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    ContentChangeRoutingModule,
    NgxHeightToggleModule
  ],
  declarations: [ContentChangeComponent]
})
export class ContentChangeModule {}

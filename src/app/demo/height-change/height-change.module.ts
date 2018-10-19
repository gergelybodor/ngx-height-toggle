import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightChangeRoutingModule } from './height-change-routing.module';
import { NgxHeightToggleModule } from '../../modules/ngx-height-toggle/ngx-height-toggle.module';
import { HeightChangeComponent } from './height-change.component';
import { DefaultCollapsibleModule } from '../shared/components/default-collapsible/default-collapsible.module';

@NgModule({
  imports: [CommonModule, HeightChangeRoutingModule, NgxHeightToggleModule, DefaultCollapsibleModule],
  declarations: [HeightChangeComponent],
  exports: [HeightChangeComponent]
})
export class HeightChangeModule {}

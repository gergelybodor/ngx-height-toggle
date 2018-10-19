import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentChangeRoutingModule } from './content-change-routing.module';
import { NgxHeightToggleModule } from '../../modules/ngx-height-toggle/ngx-height-toggle.module';
import { ContentChangeComponent } from './content-change.component';
import { CollapsibleInCollapsibleModule } from '../shared/components/collapsible-in-collapsible/collapsible-in-collapsible.module';

@NgModule({
  imports: [CommonModule, ContentChangeRoutingModule, NgxHeightToggleModule, CollapsibleInCollapsibleModule],
  declarations: [ContentChangeComponent]
})
export class ContentChangeModule {}

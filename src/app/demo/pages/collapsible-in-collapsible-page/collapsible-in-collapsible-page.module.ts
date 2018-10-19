import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentChangeRoutingModule } from './collapsible-in-collapsible-page-routing.module';
import { CollapsibleInCollapsiblePageComponent } from './collapsible-in-collapsible-page.component';
import { CollapsibleInCollapsibleModule } from '../../shared/components/collapsible-in-collapsible/collapsible-in-collapsible.module';

@NgModule({
  imports: [CommonModule, ContentChangeRoutingModule, CollapsibleInCollapsibleModule],
  declarations: [CollapsibleInCollapsiblePageComponent]
})
export class CollapsibleInCollapsiblePageModule {}

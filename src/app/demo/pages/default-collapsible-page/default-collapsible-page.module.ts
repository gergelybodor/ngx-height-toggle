import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCollapsibleModule } from '../../shared/components/default-collapsible/default-collapsible.module';
import { DefaultCollapsiblePageRoutingModule } from './default-collapsible-page-routing.module';
import { DefaultCollapsiblePageComponent } from './default-collapsible-page.component';

@NgModule({
  imports: [CommonModule, DefaultCollapsiblePageRoutingModule, DefaultCollapsibleModule],
  declarations: [DefaultCollapsiblePageComponent]
})
export class DefaultCollapsiblePageModule {}

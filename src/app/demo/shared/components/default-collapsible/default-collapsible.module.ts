import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCollapsibleComponent } from './default-collapsible.component';
import { NgxHeightToggleModule } from '../../../../modules/ngx-height-toggle/ngx-height-toggle.module';

@NgModule({
  imports: [CommonModule, NgxHeightToggleModule],
  declarations: [DefaultCollapsibleComponent],
  exports: [DefaultCollapsibleComponent]
})
export class DefaultCollapsibleModule {}

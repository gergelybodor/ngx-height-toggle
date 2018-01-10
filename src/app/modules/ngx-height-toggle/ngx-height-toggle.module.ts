import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxHeightToggleDirective } from './ngx-height-toggle.directive';

import { NgxHeightToggleService } from './ngx-height-toggle.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxHeightToggleDirective],
  providers: [NgxHeightToggleService],
  exports: [NgxHeightToggleDirective]
})
export class NgxHeightToggleModule {}

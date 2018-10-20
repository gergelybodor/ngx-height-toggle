import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxHeightToggleDirective } from './ngx-height-toggle.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxHeightToggleDirective],
  exports: [NgxHeightToggleDirective]
})
export class NgxHeightToggleModule {}

import { NgModule } from '@angular/core';
import { NgxHeightToggleDirective } from './ngx-height-toggle.directive';
import { NgxHeightToggleService } from './ngx-height-toggle.service';

@NgModule({
  declarations: [NgxHeightToggleDirective],
  exports: [NgxHeightToggleDirective],
  providers: [NgxHeightToggleService]
})
export class NgxHeightToggleModule { }

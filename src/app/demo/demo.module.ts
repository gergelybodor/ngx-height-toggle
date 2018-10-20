import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { HeaderModule } from './header/header.module';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [CommonModule, DemoRoutingModule, HeaderModule],
  declarations: [DemoComponent],
  exports: [DemoComponent]
})
export class DemoModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './demo/header/header.module';

import { AppComponent } from './app.component';

import { IpsumService } from './demo/shared/services/ipsum/ipsum.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [IpsumService],
  bootstrap: [AppComponent]
})
export class AppModule { }

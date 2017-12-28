import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './/app-routing.module';

import { ProductModule } from './product/product.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,

    ProductModule,

    AppRoutingModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'nl' } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

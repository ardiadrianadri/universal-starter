import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';

import { App } from './app/app';
import { HomeModule } from './app/home/home.module';
import { SecondModule } from './app/second/second.module';
import { MenuModule } from './app/menu/menu.module';
import { routing } from './app/app.router';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    HomeModule,
    SecondModule,
    MenuModule,
    routing
  ]
})
export class MainModule {
}

import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';

import { App } from './app/app';
import { HomeModule } from './app/home/home.module';
import { MenuModule } from './app/menu/menu.module';
import { SecondModule } from './app/second/second.module';
import { routing } from './app/app.router';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App ],
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    HomeModule,
    MenuModule,
    SecondModule,
    routing
  ]
})
export class MainModule {

}

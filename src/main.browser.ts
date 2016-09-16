import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { CoreModule } from './app/core/core.module';

import { App } from './app/app';
import { MenuComponent } from './app/menu/menu.component';
import { HomeModule } from './app/home/home.module';
import { SecondModule } from './app/second/second.module';
import { routing } from './app/app.router';


@NgModule({
  bootstrap: [ App ],
  declarations: [ App, MenuComponent ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    CoreModule.forRoot({url:'http://localhost:3000/service/menu'}),
    HomeModule,
    SecondModule,
    routing
  ]
})
export class MainModule {
}

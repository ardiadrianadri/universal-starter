import { NgModule, Component } from '@angular/core';
import { UniversalModule } from 'angular2-universal';

import { App } from './app/app';
import { HomeModule } from './app/home/home.module';
import { MenuModule } from './app/menu/menu.module';
import { SecondModule } from './app/second/second.module';
import { routing } from './app/app.router';

export function main(config) {

  @NgModule({
    bootstrap: [ App ],
    declarations: [ App ],
    imports: [
      UniversalModule.withConfig({
        document: config.document,
        originUrl: 'http://localhost:3000',
        baseUrl: '/',
        requestUrl: '/',
        // preboot: false,
        preboot: { appRoot: ['app'], uglify: true },
      }),
      HomeModule,
      MenuModule,
      SecondModule,
      routing
    ]
  })
  class MainModule {}

  return MainModule
};

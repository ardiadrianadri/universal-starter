import {
    ModuleWithProviders,
    NgModule,
    Optional,
    SkipSelf
} from '@angular/core'

import { CommonModule } from '@angular/common';
import { MenuService, MenuServiceConfig } from '../menu/menu.service';

@NgModule({
    imports:[ CommonModule ],
    providers: [ MenuService ]
})
export class CoreModule {

    constructor (@Optional() @SkipSelf() parentModule: CoreModule){
        if (parentModule){
            throw new Error ('Core module is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config:MenuServiceConfig ): ModuleWithProviders{
        return {
            ngModule: CoreModule,
            providers:[
                {provide: MenuServiceConfig, useValue: config}
            ]
        }
    }
}
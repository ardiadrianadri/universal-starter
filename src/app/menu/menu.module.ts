import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';

@NgModule({
    imports: [ SharedModule ],
    declarations: [ MenuComponent ],
    providers: [ MenuService ],
    exports: [ MenuComponent ]
})
export class MenuModule {}
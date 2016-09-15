import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { routing } from './second.router';
import { SecondComponent } from './second.component';

@NgModule({
    imports: [SharedModule, routing],
    declarations: [SecondComponent]
})
export class SecondModule {}
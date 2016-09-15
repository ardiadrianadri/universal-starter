import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {routing} from './home.router';
import {HomeComponent} from './home.component';


@NgModule({
    imports: [SharedModule, routing],
    declarations: [HomeComponent]
})
export class HomeModule{}
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SecondComponent } from './second.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    {path: 'second', component: SecondComponent}
]);
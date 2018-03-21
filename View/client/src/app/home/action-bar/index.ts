import { NgModule } from '@angular/core';

import { ActionBarComponent } from './action-bar.component';
import { ActionBarActionComponent } from './action-bar-action.component';
import { ActionBarButtonsComponent } from './action-bar-buttons.component';

export { ActionBarComponent, ActionBarActionComponent, ActionBarButtonsComponent };

@NgModule({
    declarations: [
        ActionBarComponent,
        ActionBarActionComponent,
        ActionBarButtonsComponent
    ],
    exports: [
        ActionBarComponent,
        ActionBarActionComponent,
        ActionBarButtonsComponent
    ],
    imports: [],
    providers: []
})
export class ActionBarModule { }

import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from '@angular/material/icon';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AngularMateialModule } from "../angular-material/angular-material.module";

@NgModule({
    declarations: [
        UserDetailsComponent
    ],
    imports: [
        AngularMateialModule
    ],
    exports: [
        UserDetailsComponent
    ],

})
export class ComponentModule { }
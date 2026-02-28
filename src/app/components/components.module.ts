import { NgModule } from "@angular/core";

import { UserDetailsComponent } from './user-details/user-details.component';
import { AngularMateialModule } from "../angular-material/angular-material.module";
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        UserDetailsComponent,
        FilterComponent,
    ],
    imports: [
        AngularMateialModule,
        FormsModule,
        CommonModule,
    ],
    exports: [
        UserDetailsComponent,
        FilterComponent,
    ],

})
export class ComponentModule { }
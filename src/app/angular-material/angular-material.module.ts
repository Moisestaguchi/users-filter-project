import { NgModule } from "@angular/core";

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from "@angular/material/divider";
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatDividerModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatListModule,
    ],
    exports: [
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatDividerModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatListModule,
    ],
})
export class AngularMateialModule { }
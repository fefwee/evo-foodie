import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
    declarations: [HomePageComponent],
    exports: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        SharedModule,
    ]
})
export class HomePageModule { }

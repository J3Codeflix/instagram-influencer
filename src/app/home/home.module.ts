import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { SectionsModule } from '../sections/sections.module';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CalculateService } from '../../services/calculate.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule,
        HttpClientModule
    ],
    declarations: [ 
        HomeComponent,
        NavbarComponent,
        FooterComponent,
    ],
    exports:[ HomeComponent ],
    providers: [
        ApiService,
        CalculateService
    ]
})
export class HomeModule { }

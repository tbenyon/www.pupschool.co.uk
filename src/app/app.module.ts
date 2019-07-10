import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {CollapseModule} from "ngx-bootstrap/collapse";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InlineSVGModule} from "ng-inline-svg";
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './components/main/main.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { KeyPointsComponent } from './components/key-points/key-points.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { OfferingsComponent } from './components/offerings/offerings.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        InfoBarComponent,
        MastheadComponent,
        KeyPointsComponent,
        TestimonialsComponent,
        OfferingsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        HttpClientModule,
        InlineSVGModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

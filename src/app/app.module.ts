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

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
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

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { Test1Component } from "./test1/test1.component";
import { Test2Component } from "./test2/test2.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Test1Component,
    HomeComponent,
    Test2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

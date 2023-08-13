import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeModule } from "./home/home.module";
import { RegisterModule } from "./register/register.module";

import { ComponentsModule } from "./components/components.module";
import { LayoutsModule } from "./layouts/layouts.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RegisterModule,
    ComponentsModule,
    LayoutsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

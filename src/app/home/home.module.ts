import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";
import { SectionsModule } from "./sections/sections.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SectionsModule],
  exports: [HomeComponent],
})
export class HomeModule {}

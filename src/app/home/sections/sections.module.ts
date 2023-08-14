import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroSection } from "./hero/hero.section";

@NgModule({
  declarations: [HeroSection],
  imports: [CommonModule],
  exports: [HeroSection],
})
export class SectionsModule {}

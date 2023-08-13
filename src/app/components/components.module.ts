import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ButtonComponent } from "./ui/button/button.component";
import { LogoComponent } from "./ui/logo/logo.component";
import { SelectComponent } from "./form/select/select.component";
import { BurgerMenuComponent } from "./ui/burger-menu/burger-menu.component";
import { NavbarMobileComponent } from "./modal/navbar-mobile/navbar-mobile.component";

@NgModule({
  declarations: [
    ButtonComponent,
    LogoComponent,
    SelectComponent,
    BurgerMenuComponent,
    NavbarMobileComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    LogoComponent,
    SelectComponent,
    BurgerMenuComponent,
    NavbarMobileComponent,
  ],
})
export class ComponentsModule {}

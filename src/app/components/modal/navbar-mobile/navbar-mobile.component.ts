import { Component, Input } from "@angular/core";
import {
  LanguageInterface,
  NavbarLinkInterface,
} from "src/app/layouts/layouts.types";

@Component({
  selector: "app-navbar-mobile",
  templateUrl: "./navbar-mobile.component.html",
  styleUrls: ["./navbar-mobile.component.scss"],
})
export class NavbarMobileComponent {
  @Input() isOpen!: boolean;
  @Input() navbarLinks!: NavbarLinkInterface[];
  @Input() languages!: LanguageInterface[];
}

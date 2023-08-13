import { Component, inject } from "@angular/core";
import { LanguageInterface, NavbarLinkInterface } from "src/app/layouts/types";
import { LayoutsService } from "src/app/layouts/layouts.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  navbarLinks: NavbarLinkInterface[] = [];
  languages: LanguageInterface[] = [];
  isMenuOpen: boolean = false;

  constructor() {
    this.navbarLinks = inject(LayoutsService).getNavbarLinks();
    this.languages = inject(LayoutsService).getLanguages();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

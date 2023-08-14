import { Component, inject } from "@angular/core";
import {
  LanguageInterface,
  NavbarLinkInterface,
} from "src/app/layouts/layouts.types";
import { LayoutsService } from "src/app/layouts/layouts.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  layoutsService: LayoutsService = inject(LayoutsService);
  navbarLinks: NavbarLinkInterface[] = [];
  languages: LanguageInterface[] = [];
  isMenuOpen: boolean = false;

  constructor() {
    this.navbarLinks = this.layoutsService.getNavbarLinks();
    this.languages = this.layoutsService.getLanguages();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

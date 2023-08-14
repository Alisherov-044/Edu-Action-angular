import { Injectable } from "@angular/core";
import {
  LanguageInterface,
  NavbarLinkInterface,
  SocialNetworkInterface,
} from "./layouts.types";

@Injectable({
  providedIn: "root",
})
export class LayoutsService {
  protected navbarLinks: NavbarLinkInterface[] = [
    {
      id: 1,
      text: "Asosiy sahifa",
      url: "#",
    },
    {
      id: 2,
      text: "Ta'im dasturlari",
      url: "#",
    },
    {
      id: 3,
      text: "Biz haqimizda",
      url: "#",
    },
    {
      id: 4,
      text: "Blog",
      url: "#",
    },
  ];

  protected languages: LanguageInterface[] = [
    {
      id: 1,
      text: "Uz",
      value: "uz",
    },
    {
      id: 2,
      text: "Ru",
      value: "ru",
    },
  ];

  protected socialNetworks: SocialNetworkInterface[] = [
    {
      id: 1,
      icon: "/assets/social/instagram.svg",
      url: "#",
    },
    {
      id: 2,
      icon: "/assets/social/facebook.svg",
      url: "#",
    },
    {
      id: 3,
      icon: "/assets/social/telegram.svg",
      url: "#",
    },
    {
      id: 4,
      icon: "/assets/social/twitter.svg",
      url: "#",
    },
  ];

  getNavbarLinks() {
    return this.navbarLinks;
  }

  getLanguages() {
    return this.languages;
  }

  getSocialNetworks() {
    return this.socialNetworks;
  }
}

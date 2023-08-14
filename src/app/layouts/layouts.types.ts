import { SelectInterface } from "src/app/components/components.types";

export interface NavbarLinkInterface {
  id?: number;
  text: string;
  url: string;
}

export interface LanguageInterface extends SelectInterface {}

export interface SocialNetworkInterface {
  id?: number;
  icon: string;
  url: string;
}

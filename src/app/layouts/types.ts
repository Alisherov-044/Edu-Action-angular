import { SelectInterface } from "../components/types";

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

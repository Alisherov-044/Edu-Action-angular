import { Component, inject } from "@angular/core";
import { SocialNetworkInterface } from "src/app/layouts/types";
import { LayoutsService } from "src/app/layouts/layouts.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  socialNetworks: SocialNetworkInterface[] = [];
  phoneNumber: string = "+998 95 145 86 86";
  website: string = "info@edu-action.com";
  location: string = "Toshkent shahri, Chilanzor Yakkabog' ko'chasi 25-uy";

  constructor() {
    this.socialNetworks = inject(LayoutsService).getSocialNetworks();
  }
}

import { Component, Input } from "@angular/core";
import { SelectInterface } from "src/app/components/types";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
})
export class SelectComponent {
  @Input() options!: SelectInterface[];
  @Input() name!: string;
  @Input() id!: string;
}

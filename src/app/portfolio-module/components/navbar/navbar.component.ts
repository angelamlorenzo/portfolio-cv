import { Component, EventEmitter, Input, Output } from "@angular/core";
import { INavBar } from "../../models/interfaces";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  @Input() navBar: INavBar[] = [];
  @Input() logoUrl: string = "";
  @Output() selectMenuItem: EventEmitter<INavBar> = new EventEmitter();

  public setNavBarOption(selectedItem: INavBar): void {
    this.navBar.forEach((navItem) => (navItem.active = navItem === selectedItem));
  }
}

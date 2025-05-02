import { Component, EventEmitter, Input, Output } from "@angular/core";
import { INavBar } from "../../models/interfaces";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  @Input() navBar: INavBar[] = [];
  @Input() logoUrl: string = "";
  @Output() selectMenuItem: EventEmitter<INavBar> = new EventEmitter();

  public currentLanguage: string = "es";

  constructor(private translate: TranslateService) {}

  public setNavBarOption(selectedItem: INavBar): void {
    this.navBar.forEach((navItem) => (navItem.active = navItem === selectedItem));
  }

  ngOnInit() {
    this.translate.setDefaultLang("en");
    const currentLang = this.translate.currentLang || "en";
    this.currentLanguage = currentLang;
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage = lang;
  }
}

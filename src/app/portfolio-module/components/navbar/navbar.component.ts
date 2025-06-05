import { Component, EventEmitter, Input, Output } from "@angular/core";
import { INavBar } from "../../models/interfaces";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";

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
  public isProjectPage = false;

  constructor(private router: Router, private translate: TranslateService) {
    this.router.events.subscribe(() => {
      this.isProjectPage = this.router.url.startsWith("/portfolio/");
    });
  }

  ngOnInit() {
    this.translate.setDefaultLang("en");
    const currentLang = this.translate.currentLang || "en";
    this.currentLanguage = currentLang;
  }

  public setNavBarOption(selectedItem: INavBar): void {
    this.navBar.forEach((navItem) => (navItem.active = navItem === selectedItem));
  }

  public changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage = lang;
  }

  /*@HostListener("window:resize")
  @HostListener("window:scroll")
  onViewportChange() {
    const nav: HTMLElement = this.el.nativeElement.querySelector("nav.navbar");
    const offsetTop = window.visualViewport?.offsetTop ?? 0;
    if (nav) {
      nav.style.top = `${offsetTop}px`;
    }
  }*/
}

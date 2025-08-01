import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from "@angular/core";
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
  @Output() selectMenuItem: EventEmitter<INavBar> = new EventEmitter();
  @ViewChild("navbarCollapse") navbarCollapse!: ElementRef;

  public currentLanguage: string = "es";
  public isProjectPage = false;

  constructor(private router: Router, private translate: TranslateService) {
    this.router.events.subscribe(() => {
      this.isProjectPage = this.router.url.startsWith("/portfolio/");
    });
  }

  ngOnInit() {
    this.currentLanguage = this.translate.currentLang || "en";
  }

  public setNavBarOption(selectedItem: INavBar): void {
    this.navBar.forEach((navItem) => (navItem.active = navItem === selectedItem));
  }

  public changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage = lang;
  }

  public closeNavbar() {
    const element = this.navbarCollapse.nativeElement;
    element.classList.remove("show");
  }

  @HostListener("document:click", ["$event.target"])
  onClickOutside(target: HTMLElement): void {
    const navbarEl = this.navbarCollapse?.nativeElement;
    if (navbarEl?.classList.contains("show") && !navbarEl.contains(target)) {
      this.closeNavbar();
    }
  }
}

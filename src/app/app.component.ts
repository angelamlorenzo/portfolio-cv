import { Component, HostListener } from "@angular/core";
import { INavBar } from "./portfolio-module/models/interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "portfolio";

  public navBar: INavBar[] = [
    { href: "#about", name: "header.aboutMe", active: true },
    { href: "#skills", name: "header.skills", active: false },
    { href: "#portfolio", name: "header.portfolio", active: false },
    { href: "#resume", name: "header.resume", active: false },
  ];

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    let currentSection = "";

    this.navBar.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
        if (isInViewport) {
          currentSection = item.href;
        }
      }
    });

    this.navBar.forEach((item) => {
      item.active = item.href === currentSection;
    });
  }
}

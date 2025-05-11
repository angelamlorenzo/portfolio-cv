import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { IGallery, INavBar, IProject, ITabs } from "../../models/interfaces";
import { BehaviorSubject, Subscription } from "rxjs";
import { PortfolioService } from "../../services/portfolio.service";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnInit, OnDestroy {
  public navBar: INavBar[] = [
    { href: "#about", name: "header.aboutMe", active: true },
    { href: "#skills", name: "header.skills", active: false },
    { href: "#portfolio", name: "header.portfolio", active: false },
    { href: "#resume", name: "header.resume", active: false },
  ];

  public selectedCategory: string = "Diseño Gráfico";
  public copyright: string = "copyright";

  public tabsItem: ITabs[] = [
    { active: true, name: "Diseño Gráfico", id: "diseno-grafico", category: "Diseño Gráfico" },
    { active: false, name: "Ilustración", id: "ilustracion", category: "Ilustración" },
    { active: false, name: "Web", id: "web", category: "Web" },
  ];

  public gallery: BehaviorSubject<IGallery[]> = new BehaviorSubject([] as IGallery[]);
  public loading: boolean = false;

  public dateYear = new Date().getFullYear();

  private subscription = new Subscription();

  constructor(public portfolioService: PortfolioService, public router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    this.getGallery();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getTabs(tabs: ITabs[]): void {
    const activeTab = tabs.find((tab) => tab.active);
    if (activeTab) {
      this.loading = true;
      this.selectedCategory = activeTab.category;
    }
    this.loading = false;
    this.getGallery();
  }

  showProjectInfo(project: IProject): void {
    let categoryKey: string;
    switch (this.selectedCategory) {
      case "Diseño Gráfico":
        categoryKey = "portfolio.graphicdesign.category";
        break;
      case "Ilustración":
        categoryKey = "portfolio.illustration.category";
        break;
      case "Web":
        categoryKey = "portfolio.web.category";
        break;
      default:
        categoryKey = `portfolio.${this.selectedCategory.toLowerCase()}`;
        break;
    }

    const translatedCategory = this.translate.instant(`${categoryKey}`);
    const translatedTitle = this.translate.instant(`${project.title}`);

    const titleWithHyphens = translatedTitle.replace(/\s+/g, "-").toLowerCase();
    const categoryWithHyphens = translatedCategory.replace(/\s+/g, "-").toLowerCase();

    this.portfolioService.selectedProject.next(project);
    this.router.navigate([`/portfolio/${categoryWithHyphens}/${titleWithHyphens}`]);
  }

  private getGallery() {
    this.loading = true;
    this.subscription.add(
      this.portfolioService.getGallery().subscribe({
        next: (photos: IGallery[]) => {
          this.loading = false;
          this.gallery.next(photos);
        },
      })
    );
  }

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

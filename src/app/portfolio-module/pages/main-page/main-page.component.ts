import { Component, OnDestroy, OnInit } from "@angular/core";
import { IGallery, ITabs, IProject } from "../../models/interfaces";
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
  public selectedCategory: string = "Diseño Gráfico";
  public copyright: string = "copyright";

  public tabsItem: ITabs[] = [
    { active: true, name: "portfolio.graphicdesign.category", id: "diseno-grafico", category: "Diseño Gráfico" },
    { active: false, name: "portfolio.illustration.category", id: "ilustracion", category: "Ilustración" },
    { active: false, name: "portfolio.web.category", id: "web", category: "Web" },
  ];

  public gallery: BehaviorSubject<IGallery[]> = new BehaviorSubject([] as IGallery[]);
  public loading: boolean = false;
  public dateYear = new Date().getFullYear();
  private subscription = new Subscription();

  private categorySlugMap: { [category: string]: string } = {
    "Diseño Gráfico": "graphic-design",
    Ilustración: "illustration",
    Web: "web",
  };

  constructor(public portfolioService: PortfolioService, public router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    const savedCategory = this.portfolioService.selectedCategory.getValue();
    this.selectedCategory = savedCategory;

    this.tabsItem.forEach((tab) => {
      tab.active = tab.category === this.selectedCategory;
    });

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
      this.portfolioService.selectedCategory.next(this.selectedCategory);
    }
    this.loading = false;
    this.getGallery();
  }

  public showProjectInfo(project: IProject): void {
    const slug = this.categorySlugMap[this.selectedCategory];

    this.portfolioService.selectedProject.next(project);
    this.router.navigate([`/portfolio/${slug}/${project.slug}`]);
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
}

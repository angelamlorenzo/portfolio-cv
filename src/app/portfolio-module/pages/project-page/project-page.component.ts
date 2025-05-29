import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PortfolioService } from "../../services/portfolio.service";
import { IProject } from "../../models/interfaces";
import { BehaviorSubject, Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-project-page",
  templateUrl: "./project-page.component.html",
  styleUrls: ["./project-page.component.scss"],
})
export class ProjectPageComponent implements OnInit, OnDestroy {
  public selectedProject = new BehaviorSubject<IProject>({} as IProject);
  public category = "";
  public currentLanguage = "en";

  private categorySlug = "";
  private subscription = new Subscription();

  private slugToTranslationKey: { [slug: string]: string } = {
    "graphic-design": "portfolio.graphicdesign.category",
    illustration: "portfolio.illustration.category",
    web: "portfolio.web.category",
  };

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang || this.translate.getDefaultLang() || "es";

    this.subscription.add(
      this.route.params.subscribe(({ category }) => {
        this.categorySlug = category;
        this.translateCategory();
      })
    );

    this.subscription.add(
      this.translate.onLangChange.subscribe(() => {
        this.currentLanguage = this.translate.currentLang;
        this.translateCategory();
      })
    );

    this.subscription.add(
      this.portfolioService.selectedProject.subscribe((project) => {
        this.selectedProject.next(project);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private translateCategory(): void {
    const key = this.slugToTranslationKey[this.categorySlug];
    if (key) {
      this.translate.get(key).subscribe((translated) => {
        this.category = translated;
      });
    } else {
      this.category = this.categorySlug.replace(/-/g, " ");
    }
  }
}

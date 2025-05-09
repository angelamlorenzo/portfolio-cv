// project-page.component.ts
import { Component, OnInit, OnDestroy } from "@angular/core";
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
  public selectedProject: BehaviorSubject<IProject> = new BehaviorSubject<IProject>({} as IProject);
  public projectTitle: string = "";
  public category: string = "";
  public loading: boolean = false;
  private subscription: Subscription = new Subscription();

  public currentLanguage: string = "en";

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params["category"];
      this.category = this.category.replace(/-/g, " ");
    });

    this.subscription.add(
      this.portfolioService.selectedProject.subscribe((project) => {
        this.selectedProject.next(project);
      })
    );

    this.translate.setDefaultLang("en");
    const currentLang = this.translate.currentLang || "es";
    this.currentLanguage = currentLang;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

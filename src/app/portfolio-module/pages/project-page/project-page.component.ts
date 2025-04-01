// project-page.component.ts
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PortfolioService } from "../../services/portfolio.service";
import { IProject } from "../../models/interfaces";
import { BehaviorSubject, Subscription } from "rxjs";

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

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectTitle = params["projectTitle"];
      this.category = params["category"];
    });

    this.subscription.add(
      this.portfolioService.selectedProject.subscribe((project) => {
        this.selectedProject.next(project);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

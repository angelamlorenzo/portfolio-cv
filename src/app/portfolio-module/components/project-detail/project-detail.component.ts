import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { IProject } from "../../models/interfaces";
import { PortfolioService } from "../../services/portfolio.service";
import { ActivatedRoute } from "@angular/router";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.scss"],
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  @Input() category: string = "";
  @Input() selectedProject: BehaviorSubject<IProject> = new BehaviorSubject({} as IProject);
  public loading: boolean = true;

  private subscription: Subscription = new Subscription();

  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute, private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.chooseProject();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    sessionStorage.removeItem("selectedProject");
  }

  private chooseProject(): void {
    this.loading = true;

    setTimeout(() => {
      const savedProject = sessionStorage.getItem("selectedProject");

      if (savedProject) {
        this.selectedProject.next(JSON.parse(savedProject));
        this.loading = false;
      } else {
        this.subscription.add(
          this.portfolioService.selectedProject.subscribe((project) => {
            this.selectedProject.next(project);
            sessionStorage.setItem("selectedProject", JSON.stringify(project));
            this.loading = false;
          })
        );
      }
    }, 200);
  }

  public goToLink(): void {}
}

// modal-detail.component.ts
import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { IProject } from "../../models/interfaces";
import { PortfolioService } from "../../services/portfolio.service";

@Component({
  selector: "app-modal-detail",
  templateUrl: "./modal-detail.component.html",
  styleUrls: ["./modal-detail.component.scss"],
})
export class ModalDetailComponent implements OnInit, OnDestroy {
  @Input() category: string = "";
  @Input() selectedProject: BehaviorSubject<IProject> = new BehaviorSubject({} as IProject);
  public loading: boolean = true;

  private subscription: Subscription = new Subscription();

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.chooseProject();
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    sessionStorage.removeItem("selectedProject");
  }

  public goToLink(): void {}
}

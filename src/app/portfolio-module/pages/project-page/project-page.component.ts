import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IGallery, IProject } from "../../models/interfaces";
import { PortfolioService } from "../../services/portfolio.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-project-page",
  templateUrl: "./project-page.component.html",
  styleUrls: ["./project-page.component.scss"],
})
export class ProjectPageComponent implements OnInit {
  public projectTitle: string | null = null;
  public project: IProject | null = null;
  public loading: boolean = true;
  public category: string = "";
  public selectedProject: IProject = {} as IProject;
  public currentIndex: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService) {}

  public goToLink(): void {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const title = params.get("title")?.replace(/-/g, " ");
      if (title) {
        this.getProjectDetails(title);
      }
    });
  }

  getProjectDetails(title: string): void {
    this.portfolioService.getGalleryCategory().subscribe((galleries: IGallery[]) => {
      next: (photos: IGallery[]) => {
        let foundProject: IProject | undefined;
        photos.forEach((gallery) => {
          foundProject = gallery.projects.find((p) => p.title === title);
          if (foundProject) {
            this.project = foundProject;
          }
        });
      };
    });
  }
}

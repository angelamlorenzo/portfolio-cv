import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IGallery, IProject } from "../../models/interfaces";
import { PortfolioService } from "../../services/portfolio.service";

@Component({
  selector: "app-project-page",
  templateUrl: "./project-page.component.html",
  styleUrls: ["./project-page.component.scss"],
})
export class ProjectPageComponent implements OnInit {
  public projectTitle: string | null = null;
  public project: IProject | null = null;
  public loading: boolean = true;
  public error: string | null = null;

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.projectTitle = this.route.snapshot.paramMap.get("title");
    console.log("Title parameter:", this.projectTitle); // Verifica si el parámetro se recibe correctamente

    if (this.projectTitle) {
      const titleDecoded = this.projectTitle.replace(/-/g, " ");
      console.log("Decoded project title:", titleDecoded); // Verifica si el título es correcto
      this.getProjectDetails(titleDecoded);
    }
  }

  getProjectDetails(title: string): void {
    this.portfolioService.getGalleryCategory().subscribe(
      (galleries: IGallery[]) => {
        let foundProject: IProject | undefined;
        galleries.forEach((gallery) => {
          foundProject = gallery.projects.find((p) => p.title === title);
          if (foundProject) {
            this.project = foundProject;
          }
        });

        if (!foundProject) {
          this.error = "Proyecto no encontrado";
        }
      },
      (error) => {
        console.error("Error al obtener el proyecto", error);
        this.error = "Error al obtener el proyecto";
      }
    );
  }
}

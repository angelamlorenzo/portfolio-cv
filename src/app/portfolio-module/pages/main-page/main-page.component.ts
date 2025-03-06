import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { IGallery, INavBar, IProject, ITabs } from "../../models/interfaces";
import { BehaviorSubject, Subscription } from "rxjs";
import { PortfolioService } from "../../services/portfolio.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnInit, OnDestroy {
  public navBar: INavBar[] = [
    { href: "#about", name: "About me", active: true },
    { href: "#skills", name: "Skills", active: false },
    { href: "#portfolio", name: "Portfolio", active: false },
    { href: "#resume", name: "Resume", active: false },
  ];

  public selectedCategory: string = "Animales";
  public tabsItem: ITabs[] = [
    { active: true, name: "Animales", id: "animales", category: "Animales" },
    { active: false, name: "Flores", id: "flores", category: "Flores" },
    { active: false, name: "Otros", id: "otros", category: "Otros" },
  ];

  public gallery: BehaviorSubject<IGallery[]> = new BehaviorSubject([] as IGallery[]);
  public selectedProject: IProject = {} as IProject;
  public open: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loading: boolean = false;
  public loadingModal: boolean = false;

  public currentIndex: BehaviorSubject<number> = new BehaviorSubject(0);

  private subscription = new Subscription();

  constructor(public portfolioService: PortfolioService, public router: Router) {}

  ngOnInit(): void {
    this.getGallery();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  public getTabs(tabs: ITabs[]): void {
    const activeTab = tabs.find((tab) => tab.active);
    if (activeTab) {
      this.loading = true;
      this.selectedCategory = activeTab.category;
    }
    this.getGallery();
  }

  public closeModal(): void {
    this.open.next(false);
    this.loadingModal = false;
  }

  public showProjectInfo(project: IProject): void {
    this.open.next(true);

    this.loadingModal = true;
    this.selectedProject = project;
    this.currentIndex.next(0);

    setTimeout(() => {
      this.loadingModal = false;
    }, 100);

    this.router.navigate(["/project"]);
  }

  private getGallery() {
    this.loading = true;
    this.subscription.add(
      this.portfolioService.getGalleryCategory().subscribe({
        next: (photos: IGallery[]) => {
          this.loading = false;
          this.gallery.next(photos);
        },
        error: (e: HttpErrorResponse) => {
          this.loading = false;
          console.error("Error datos");
        },
      })
    );
  }
}

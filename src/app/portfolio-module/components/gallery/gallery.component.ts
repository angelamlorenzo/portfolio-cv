import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IGallery, IProject } from "../../models/interfaces";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent {
  @Input() gallery: BehaviorSubject<IGallery[]> = new BehaviorSubject([] as IGallery[]);
  @Input() selectedCategory: string = "";
  @Output() selectProjectAction: EventEmitter<IProject> = new EventEmitter();

  constructor(public router: Router) {}

  public selectProject(project: IProject): void {
    this.selectProjectAction.emit(project);
  }
}

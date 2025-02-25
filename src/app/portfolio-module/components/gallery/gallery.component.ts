import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGallery, IProject } from '../../models/interfaces';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() gallery: BehaviorSubject<IGallery[]> = new BehaviorSubject([] as IGallery[]);
  @Input() selectedCategory: string = '';
  @Output() projectInfoAction: EventEmitter<IProject> = new EventEmitter();

  public selectProject(project: IProject): void {
    this.projectInfoAction.emit(project);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { moveDownUpStatus } from '../../utils/effects/effects';
import { IProject } from '../../models/interfaces';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss'],
  animations: [moveDownUpStatus],
})
export class ModalDetailComponent {
  @Input() open: boolean = false;
  @Input() loading: boolean = true;
  @Input() category: string = '';
  @Input() selectedProject: IProject = {} as IProject;
  @Input() currentIndex: BehaviorSubject<number> = new BehaviorSubject(0);
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter(false);

  public close() {
    this.closeModal.emit(false);
  }

  public goToLink(): void {}
}

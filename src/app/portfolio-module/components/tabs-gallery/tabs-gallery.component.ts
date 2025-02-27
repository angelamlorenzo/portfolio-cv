import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITabs } from "../../models/interfaces";

@Component({
  selector: "app-tabs-gallery",
  templateUrl: "./tabs-gallery.component.html",
  styleUrls: ["./tabs-gallery.component.scss"],
})
export class TabsGalleryComponent {
  @Input() tabs: ITabs[] = [];
  @Output() actionSelectTab: EventEmitter<ITabs[]> = new EventEmitter();
  @Input() selectedCategory: string = "";

  public returnTabs(selectedTab: ITabs): void {
    this.tabs.forEach((tab) => (tab.active = tab === selectedTab));
    this.actionSelectTab.emit(this.tabs);
  }
}

import { Component, OnInit, OnDestroy } from "@angular/core";
import { TypewriterService } from "../../services/typewriter-service.service";
import { BehaviorSubject, Subscription } from "rxjs";

@Component({
  selector: "app-cover",
  templateUrl: "./cover.component.html",
  styleUrls: ["./cover.component.scss"],
})
export class CoverComponent implements OnInit, OnDestroy {
  public typedText: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private subscription = new Subscription();

  titles: string[] = ["Front End Developer", "Graphic Designer", "Publishing Creative"];

  constructor(private typewriterService: TypewriterService) {}

  ngOnInit() {
    this.subscription = this.typewriterService.getTypewriterEffect(this.titles).subscribe((text) => {
      this.typedText.next(text);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

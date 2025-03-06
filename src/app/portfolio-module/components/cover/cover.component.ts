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

  private titles: string[] = ["Front End Developer", "Graphic Designer", "Publishing Creative"];
  private subscription = new Subscription();

  constructor(private typewriterService: TypewriterService) {}

  ngOnInit() {
    this.typewriterService.getTypewriterEffect(this.titles).subscribe((text) => {
      this.typedText.next(text);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

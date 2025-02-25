import { Component, Input, SimpleChanges, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { IImage } from '../../models/interfaces';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent {
  @Input() images: IImage[] = [];
  @Input() currentIndex: BehaviorSubject<number> = new BehaviorSubject(0);
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  public indexValue: number = 0;
  public maxIndex: number = 0;

  private subscription = new Subscription();

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.subscription.add(
      this.currentIndex.subscribe((index) => {
        this.indexValue = index;
        this.updateSliderPosition();
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images'] && this.images) {
      this.maxIndex = this.images.length - 1;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public goToSlide(index: number) {
    this.currentIndex.next(index);
  }

  prevSlide() {
    if (this.indexValue > 0) {
      this.currentIndex.next(this.indexValue - 1);
    }
  }

  nextSlide() {
    if (this.indexValue < this.maxIndex) {
      this.currentIndex.next(this.indexValue + 1);
    }
  }

  private updateSliderPosition() {
    this.renderer.setStyle(this.sliderContainer.nativeElement, 'transform', `translateX(${-this.indexValue * 100}%)`);
  }
}

import { Injectable } from "@angular/core";
import { concat, from, interval, of } from "rxjs";
import { concatMap, delay, ignoreElements, map, repeat, take } from "rxjs/operators";
import { ITypeParams } from "../models/interfaces";

@Injectable({
  providedIn: "root",
})
export class TypewriterService {
  private type({ word, speed, backwards = false }: ITypeParams) {
    return interval(speed).pipe(
      map((x) => (backwards ? word.substring(0, word.length - x) : word.substring(0, x + 1))),
      take(word.length)
    );
  }

  typeEffect(word: string) {
    return concat(
      this.type({ word, speed: 50 }),
      of("").pipe(delay(1200), ignoreElements()),
      this.type({ word, speed: 30, backwards: true }),
      of("").pipe(delay(300), ignoreElements())
    );
  }

  getTypewriterEffect(titles: string[]) {
    return from(titles).pipe(
      concatMap((title) => this.typeEffect(title)),
      repeat()
    );
  }
}

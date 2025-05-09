import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, delay, Observable } from "rxjs";
import { IGallery, IProject } from "../models/interfaces";
import { assetUrl } from "src/single-spa/asset-url";

@Injectable({
  providedIn: "root",
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  public selectedProject: BehaviorSubject<IProject> = new BehaviorSubject({} as IProject);

  public getGallery(): Observable<IGallery[]> {
    const url = assetUrl("/data/portfolio-data.json");
    return this.http.get<IGallery[]>(url).pipe(delay(400));
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, Observable } from "rxjs";
import { IGallery } from "../models/interfaces";
import { assetUrl } from "src/single-spa/asset-url";

@Injectable({
  providedIn: "root",
})
export class PortfolioService {
  constructor(private http: HttpClient) {}
  public getGalleryCategory(): Observable<IGallery[]> {
    const url = assetUrl("/data/portfolio-data.json");
    return this.http.get<IGallery[]>(url).pipe(delay(100));
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected entityUrl;
  protected http;
  protected url = environment.url;

  constructor(entityUrl: string, http: HttpClient) {
    this.entityUrl = entityUrl;
    this.http = http;
  }

  public get(): Observable<any>{
    return this.http.get(this.url + this.entityUrl);
  }

  public getById(id): Observable<any>{
    return this.http.get(this.url + this.entityUrl + "/" + id)
  }

  public create(entity): Observable<any>{
    return this.http.post(this.url + this.entityUrl, entity);
  }

  public delete(id): Observable<any>{
    return this.http.delete(this.url + this.entityUrl + "/" + id);
  }

  public edit(id, body): Observable<any>{
    return this.http.put(this.url + this.entityUrl + "/" + id, body);
  }
}

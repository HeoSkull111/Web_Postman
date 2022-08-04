import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
  getPaginated(page: number, perPage: number): Observable<any> {
    let resultObservable = this.http.get(
      `https://social.runwayclub.dev/api/articles/latest?page=${page}&per_page=${perPage}`
    );
    return resultObservable;
  }
  getById(id: number) : Observable <any> {
    let resultObservable = this.http.get(`https://social.runwayclub.dev/api/articles/${id}`);
    return resultObservable;
  }
}

import {Injectable} from '@angular/core';
import {configuration} from "./configuration";
import {Observable, of} from "rxjs";
import {Post} from "./Post";

import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {post} from "selenium-webdriver/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  app_config = configuration;
  apiUrl = 'api/posts';

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed:${error.message}');
      return of(result as T);
    }
  }

  getConfigInfo() {
    return this.app_config;
  }

  getPost(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap(post => {
        console.log(post)
      }),
      catchError(this.handleError('post', []))
    )
  }


  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('post by Id', []))
    );
  }

  updatePost(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`,null,null).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('update post by Id', []))
    )
  }
}

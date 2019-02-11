import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap, catchError} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  apiUrl = 'api/users';

  constructor(private http: HttpClient, private router: Router) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed:${error.message}');
      return of(result as T);
    }
  }

  signup(formData: NgForm) {
    return this.http.post<any>(`${this.apiUrl}/signup`, formData).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('signup', []))
    );
  }

  // @ts-ignore
  login(formData: NgForm) {
    return this.http.post<any>(`${this.apiUrl}/login`, formData).pipe(
        tap(user => {
          console.log(user)
          if (user && user.token) {
            localStorage.setItem("user", JSON.stringify(user));
          }
        }),
        catchError(this.handleError('login', []))
      )
  }

  logout() {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      this.router.navigate(['/Home']);
    }
  }

  isloggedIn() {
    if (localStorage.getItem("user")) {
      return true;
    }
    return false;
  }

  getUser() {
    if (this.isloggedIn) {
      return JSON.parse(localStorage.getItem("user"));
    }
  }
}

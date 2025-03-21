import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/user';
  private loggedInUser: User | null = null;




  constructor(private http: HttpClient,
    private router: Router) { }


  loginUser(user: User): Observable<any> {
    console.log('Sending login request with credentials:', user);
    return this.http.post(`${this.loginUrl}/login`, user).pipe(
      tap((response: any) => {
        this.storeLoggedInUser(response);
      })
    );
  }


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.loginUrl + '/all');
  }


  // deleteUserById(userId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.loginUrl}/user/${userId}`, { responseType: 'text' as 'json' });
  // }


  public registerUser(user: User) {
    return this.http.post(`${this.loginUrl}/add`, user);
  }
  storeLoggedInUser(user: User) {
    this.loggedInUser = user;
  }


  // Get the stored logged-in user
  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }


  // updateUserByUsername(username: string, user: User): Observable<User> {
  //   return this.http.put<User>(`${this.loginUrl}/${username}/updateUsername`, user);
  // }
  // getUserById(userId: any): Observable<User> {
  //   return this.http.get<User>(`${this.loginUrl}/users/${userId}`);
  // }
  // searchUsers(searchText: string): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.loginUrl}/search?searchText=${searchText}`);
  // }


  clientLogout(): void {
    console.log("%%%%%%%%%%%%%%%-----");
    localStorage.clear();
    console.log("1234567890");
    this.router.navigate(['/home']);
  }


  // updateUserInformation(id: any, user: User): Observable<User> {
  //   return this.http.put<User>(`${this.loginUrl}/users/${id}`, user);
  // }


  navigate(url: string): void {
    this.router.navigate(['/' + url]);
  }
}
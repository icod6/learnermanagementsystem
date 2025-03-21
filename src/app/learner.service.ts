import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Learner } from './login/learner';

@Injectable({
  providedIn: 'root'
})
export class LearnerService {

  private loginUrl = 'http://localhost:8080/learner';
  





  constructor(private http: HttpClient,
    private router: Router) { }



  loginLearner(l:any): Observable<any> {
    console.log('Sending login request with credentials:', l);
    return this.http.post(`${this.loginUrl}/login`,l);
  }
  getAllLearner(): Observable<Learner[]> {
    return this.http.get<Learner[]>(this.loginUrl + '/all');
  }


  addLearner(body: any): Observable<Learner> {
    return this.http.post<Learner>(this.loginUrl + '/add', body);
  }


  deleteLearner(id: any): Observable<any> {
    return this.http.delete<any>(this.loginUrl + '/delete/'+id, {responseType: 'text' as 'json'});
  }


  updateLearner(body: any, id: any): Observable<Learner> {
    return this.http.put<Learner>(this.loginUrl + '/update/'+ id, body);
  }


  getLearnerById(id: any): Observable<Learner> {
    return this.http.get<Learner>(this.loginUrl + '/byId/'+id);
  }
}

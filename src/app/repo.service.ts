import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  _URL='http://api.github.com/users/';
  token = '?client_id=' +environment.apiKey;
  

  constructor(public http: HttpClient  ) { 

  }
  getRepoDetails(username:string):Observable<any> {
    return this.http.get(this._URL + username +'/repos' + this.token)
  }
}
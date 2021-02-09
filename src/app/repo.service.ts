import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common';
import { environment} from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  _URL='http://api.github.com/users/';
  token = '?access_token=' +environment.apiKey;
  

  constructor(Public http: HttpClient  ) { 

  }
  getRepoDetails(username:string):Observable<any> {
    return this.http.get(this._URL + username +'/repo' + this token)
  }
}

import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users :User[] = [];


  constructor(private http:HttpClient) {

   }
   findUser(username){
     interface ApiResponse{
       login:string;
       html_url:string;
       avatar_url:string;
       bio:any;
      name:any;
      location:any;
      followers: any;
      following: any;
      created_at : Date;
      public_repos: any
     }
     let searchEndpoint = "https://api.github.com/users/"+username+"?client_id="+environment.apiKey;
    let promise = new Promise<void>((resolve,reject)=>{
      this.users = [];
      this.http.get<ApiResponse>(searchEndpoint).toPromise().then(
        (response)=>{
        this.users.push(response);
        console.log(response)
        resolve();

      }, error =>{
        reject(error )
      }
      )
   })
   return promise;
}
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { user } from './entity/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {



  private baseURL = "http://localhost:9091/user/";

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<user[]>{
    return this.httpClient.get<user[]>(`${this.baseURL}` +'/showAllUser');
  }



  // [x: string]: any;
  //  private baseURL:string = 'http://localhost:9091/user/';

  // constructor(private httpClient: HttpClient) { }
  


signUp(userObj:any){
  return this.httpClient.post<any>(`${this.baseURL}createUser`,userObj)
}

//basic signup method code ? 



// }


//   public registerUser(userData: any){
//     return this.httpClient.post(this.API + '/createUser',userData);

//   }


  // public getUsers(){
  //   return this.httpClient.get(`${this.baseURL}showAllUser`);
  // }
  

  //  public addUser(Users: User): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`+'/user/createUser', Users);
  // }


  // public registerUser(userData){
  //   return this.http.post(this.API + '')

  // }
  // login(loginObj:any){
  //   return this.httpClient.post<any>(`${this.baseURL}userLogin`,loginObj)
  // }

  login(email: string, userPassword: string) {
    return this.httpClient.post<any>(`${this.baseURL}userLogin`, { email: email, userPassword: userPassword })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
}

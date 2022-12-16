import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { user } from './entity/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  isAdminLogin = new BehaviorSubject<boolean>(true);
  showSideMenu = new BehaviorSubject<boolean>(false);

  userId!: any;

  public setAdminType(isAdmine: boolean) {
    this.isAdminLogin.next(isAdmine);
  }

  public setSideMenuView(view: boolean) {
    this.showSideMenu.next(view);
  }

  setAdminId(rationAdminId: Number) {
    this.userId = this.userId;
  }

  private baseURL = 'http://localhost:9091/user/';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<user[]> {
    return this.httpClient.get<user[]>(`${this.baseURL}` + '/showAllUser');
  }

  signUp(userObj: any) {
    return this.httpClient.post<any>(`${this.baseURL}createUser`, userObj);
  }

  login(email: string): Observable<any> {
    return this.httpClient.get<any>(
      `${this.baseURL}` + 'userLogin/' + `${email}`
    );
  }

  getUserDetails(email : string){
    return this.httpClient.get<user>(`${this.baseURL}` + 'userLogin/'+ `${email}`);
  }

  // logout() {
  //   localStorage.removeItem('currentUser');
  // }
}

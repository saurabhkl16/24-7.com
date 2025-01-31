import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectKService {
  public selectedProductInfo = signal<any[]>([]);
  private dataSource = new BehaviorSubject<any>(null);
  public currentData = this.dataSource.asObservable();
  public isAuthenticated = signal<boolean>(false);
  private apiUrl = 'http://localhost:9992';
  public myCart: any = [];

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  public getHomePageData(): Observable<any> {
    return this.http.get('assets/homepagedata.json');
  }

  public showSuccessToaster(message: any) {
    this.toastr.success(message);
  }

  public showErrorToaster(message: any) {
    this.toastr.error(message);
  }

  public updateMycart(data: any) {
    this.dataSource.next(data);
  }

  public UserLogin(loginDetails: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {
      email: loginDetails.username,
      password: loginDetails.password,
    });
  }

  public logout() {
    this.isAuthenticated.update(() => false); // Update auth state on logout
  }

  public loginSuccess() {
    this.isAuthenticated.update(() => true); // Update auth state on successful login
  }
}

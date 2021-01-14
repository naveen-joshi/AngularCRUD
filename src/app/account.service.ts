import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url = "http://localhost:3000/";
  constructor(private httpClient:HttpClient) { }

  getAllAccounts(accountType):Observable<any> {
    return this.httpClient.get<any>(`${this.url}/${accountType}`)
  }
  getAccountById(accountType, accountNumber):Observable<any> {
    return this.httpClient.get<any>(`${this.url}/${accountType}/${accountNumber}`)
  }
  createAccount(account):Observable<any> {
    return this.httpClient.post<any>(this.url + '/create', account)
  }
  getById(id):Observable<any>{
    return this.httpClient.get('../assets/data.json')
  }
}

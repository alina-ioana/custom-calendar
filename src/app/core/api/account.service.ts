import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import LoginPayload from "../../shared/_payload_models/Login";
import StorageHelper from "../helpers/storage.helper";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly RESOURCE_URL = '/account';

  constructor(
    private apiService: ApiService,
  ) { }

  login(credentials: LoginPayload): Observable<any> {
    return this.apiService.post(`${this.RESOURCE_URL}/login`, credentials);
  }

  getUserDetails(): Observable<any> {
    return this.apiService.post(`${this.RESOURCE_URL}/getUserDetails`, StorageHelper.getToken());
  }

}

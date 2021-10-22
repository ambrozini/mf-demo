import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _username = '';

  public get username() {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
}

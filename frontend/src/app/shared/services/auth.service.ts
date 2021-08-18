import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "../models/User";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  USER: User = User.NONE;

  constructor() {
    this.USER = JSON.parse(
      atob(
        localStorage.getItem("AuthSession") || btoa(JSON.stringify(User.NONE))
      )
    );
  }

  login() {
    return from(
      new Promise<User>((resolve) => resolve(this.USER))
    ).pipe(
      tap((session) => {
        localStorage.setItem("AuthSession", btoa(JSON.stringify(session)));

        return session;
      })
    );
  }

  logout() {
    return from(
      new Promise<User>((resolve) => resolve(this.USER))
    ).pipe(
      tap((session) => {
        localStorage.removeItem("AuthSession");

        return session;
      })
    );
  }

  getUser() {
    return from(
      new Promise<User>((resolve) => resolve(this.USER))
    );
  }
}

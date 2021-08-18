import { Component, OnInit } from "@angular/core";
import { tap } from "rxjs/operators";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private service: AuthService) {}

  ngOnInit(): void {
    this.service
      .getUser()
      .pipe(tap((user) => console.log(user)))
      .subscribe();
  }
}

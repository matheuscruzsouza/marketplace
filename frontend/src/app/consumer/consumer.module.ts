import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

import { SharedModule } from "../shared/components/shared.module";

import { ConsumerRoutingModule } from "./consumer.routing.module";

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    SharedModule,
    FlexLayoutModule,
  ],
  exports: [HomeComponent, LoginComponent],
})
export class ConsumerModule {}

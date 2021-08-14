import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { ConsumerRoutingModule } from "./consumer.routing.module";
import { SharedModule } from "../shared/components/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    SharedModule,
    FlexLayoutModule,
  ],
  exports: [HomeComponent],
})
export class ConsumerModule {}

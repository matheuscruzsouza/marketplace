import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConsumerModule } from "./consumer/consumer.module";
import { SharedModule } from "./shared/components/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    ConsumerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

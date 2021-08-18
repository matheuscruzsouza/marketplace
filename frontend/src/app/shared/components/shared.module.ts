import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppContainerComponent } from "./app-container/app-container.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CardComponent } from "./card/card.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppContainerComponent, CardComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule],
  exports: [AppContainerComponent, CardComponent],
})
export class SharedModule {}

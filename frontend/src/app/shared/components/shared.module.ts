import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppContainerComponent } from "./app-container/app-container.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [AppContainerComponent, CardComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [AppContainerComponent, CardComponent],
})
export class SharedModule {}

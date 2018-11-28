import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DxBoxModule, DxButtonModule, DxDataGridModule, DxFilterBuilderModule, DxPopupModule, DxToolbarModule, DxCheckBoxModule,DxTemplateModule} from 'devextreme-angular';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxBoxModule,
    DxDataGridModule,
    DxToolbarModule,
    DxButtonModule,
    DxPopupModule,
    DxFilterBuilderModule,
    DxCheckBoxModule,
    DxTemplateModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

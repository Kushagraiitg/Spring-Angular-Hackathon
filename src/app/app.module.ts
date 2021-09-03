import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockPortfolioComponent } from './stock-portfolio/stock-portfolio.component';
import { FormsModule } from '@angular/forms';
import { StockMainComponent } from './stock-main/stock-main.component';
import { StockLoginComponent } from './stock-login/stock-login.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    StockCreateComponent,
    StockEditComponent,
    StockListComponent,
    StockPortfolioComponent,
    StockMainComponent,
    StockLoginComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

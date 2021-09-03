
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockPortfolioComponent } from './stock-portfolio/stock-portfolio.component';
import { StockMainComponent } from './stock-main/stock-main.component';
import { StockLoginComponent } from './stock-login/stock-login.component';
import { GraphComponent } from './graph/graph.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'stock-login' },
 
  { path: 'create-stock', component: StockCreateComponent },
  { path: 'stock-list', component: StockListComponent },

  { path: 'stock-edit/:id', component: StockEditComponent },
  { path: 'stock-portfolio', component: StockPortfolioComponent },

  { path: 'stock-edit/:id', component: StockEditComponent }  ,
  { path: 'stock-main', component: StockMainComponent },
  { path: 'stock-login', component: StockLoginComponent },
  { path: 'graph', component: GraphComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
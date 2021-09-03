import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-stock-portfolio',
  templateUrl: './stock-portfolio.component.html',
  styleUrls: ['./stock-portfolio.component.css']
})
export class StockPortfolioComponent implements OnInit {
  marketPrice:number=0.0;
  Stocks: any = [];
  shower:boolean=false;
  index:number=0;
  orderedPrice:number=0;
  constructor( 
    public restApi: RestApiService
    ) { }

   ngOnInit(){
    this.loadStocks()
    
    // for(let i=0;i<this.Stocks.length;i++){
    //   this.getPrice(this.Stocks[i].stockTicker);
    // }
    
    
    
  }

   loadStocks() {
    
    return this.restApi.getPortfolio().subscribe(async (data: {}) => {

        this.Stocks = data;
        

    })
  }


  getPrice (name:string,price:number) {
    //update the ui
    // var pname:string = event.target.value;
    //this.Stocks.stockTicker=this.Stocks.stockTicker.toUpperCase();
    this.orderedPrice=price;
    return this.restApi.getStockValue(name).subscribe((data: number) => {
      // this.Stocks=data;
      this.marketPrice=data;
      if(this.marketPrice>this.orderedPrice){
        document.getElementById("priceCurrent")!.style.color="green"!;
      }
      else{
        document.getElementById("priceCurrent")!.style.color="red";
      }
      
    })
  }
 
}

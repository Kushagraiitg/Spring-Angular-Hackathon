import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  @Input() stockDetails = { id: 0, stockTicker: '', price: 0,volume:1,buyOrSell:'',statusCode:0,date:'' ,totalPrice:0,currentPrice:0}
  marketPrice:number=0.0
  stockVolume:number=0.0
  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { 
    
  }

  ngOnInit() { }

  addStock() {
    //this.stockDetails.buyOrSell=this.stockDetails.buyOrSell.toUpperCase();
    this.stockDetails.stockTicker=this.stockDetails.stockTicker.toUpperCase();
    if(this.stockDetails.buyOrSell=="BUY"){
      if(this.marketPrice>=this.stockDetails.price  )
      {this.stockDetails.statusCode=2;}
      else{
        this.stockDetails.statusCode=1;
      }
      this.restApi.createStock(this.stockDetails).subscribe((data: {}) => {
        this.router.navigate(['/stock-list'])
      })
    }
    else{
      this.restApi.getStockVolume(this.stockDetails.stockTicker).subscribe((data: any) =>{
        this.stockVolume=data;
        console.log(this.stockVolume);
        
          if(this.marketPrice<=this.stockDetails.price  )
          {this.stockDetails.statusCode=2;}
          else{
            if(this.stockVolume<this.stockDetails.volume){
              this.stockDetails.statusCode=2;
                alert("Stocks available to sell are: "+this.stockVolume);
            }
            else{this.stockDetails.statusCode=1;}
          }
        
          this.restApi.createStock(this.stockDetails).subscribe((data: {}) => {
            this.router.navigate(['/stock-list'])
          })
        });
      }
    
    

   
    
  }
  getPrice () {
    //update the ui
    // var pname:string = event.target.value;
    this.stockDetails.stockTicker=this.stockDetails.stockTicker.toUpperCase();
    return this.restApi.getStockValue(this.stockDetails.stockTicker).subscribe((data: any) => {
      // this.Stocks=data;
      this.marketPrice=data;
      if(this.marketPrice==-1){
        alert("Wrong Input");
      }
    })
  }
  // document.getElementById("tickername")?.innerText
}

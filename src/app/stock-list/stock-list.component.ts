import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  Stocks: any = [];
  constructor( 
    public restApi: RestApiService
    ) { }

  ngOnInit(): void {
    this.loadStocks()
  }

  loadStocks() {
    return this.restApi.getStocks().subscribe((data: {}) => {
        this.Stocks = data;
    })
  }
  selectChangeHandler (event: any) {
    //update the ui
    var pname:string= event.target.value;
    return this.restApi.sortBy(pname).subscribe((data: {}) => {
      this.Stocks=data;
    })
  }
  

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RestApiService } from "./shared/rest-api.service";
import { Router } from '@angular/router';
import { StockLoginComponent } from './stock-login/stock-login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide = false;

  changeHide(val: boolean) {
    this.hide = val;
  }
  title = 'Stocks';
  toggler:boolean=false;
  public var1: any;
  constructor(
   
    public restApi: RestApiService, 
    public router: Router,
  
  ) {
   
    this.var1={
      'var': false,
    } 
   }


   addToggle(){

    
  this.var1.var=true;
   }

}

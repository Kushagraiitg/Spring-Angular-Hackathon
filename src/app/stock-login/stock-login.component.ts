import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";


@Component({
  selector: 'app-stock-login',
  templateUrl: './stock-login.component.html',
  styleUrls: ['./stock-login.component.css']
})

export class StockLoginComponent implements OnInit {
  @Output() onHide = new EventEmitter<boolean>();
  public name: any;
  public var1: any;
  
  constructor(
   
    public restApi: RestApiService, 
    public router: Router,
  
  ) {
    this.name={
      'name1':''
    }
    this.var1={
      'var': false,
    } 
   }

  ngOnInit(): void {
  }




addName() {
  
    
  this.onHide.emit(true);
    
  this.var1.var= true;
  this.router.navigate(['/stock-main'],{queryParams:{ serviceId: this.name.name1}})
  console.log(this.name.name1)
  
}

}

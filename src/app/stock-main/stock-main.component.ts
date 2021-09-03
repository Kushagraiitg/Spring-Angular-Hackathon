
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { RestApiService} from "../shared/rest-api.service";

@Component({
  selector: 'app-stock-main',
  templateUrl: './stock-main.component.html',
  styleUrls: ['./stock-main.component.css']
})
export class StockMainComponent implements OnInit {

  public sid: any;
  public sub:any;
  constructor(
    public restApi: RestApiService, 
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.sid={
      'sid1': ''
    }
   }

   ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
       // console.log(params['serviceId'])
        this.sid.sid1 = params['serviceId'] ;
        console.log(this.sid.sid1)
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {
 coid;
  constructor(private cser:CookieService) { }
  setcook()
  {
    this.cser.set('sid','sumit joshi')
     
  }
  getcook()
  {
    this.coid=this.cser.get('sid');
  }
  delcook()
  {
    this.cser.delete('sid');
    this.coid="";
  }
  ngOnInit() {
  }

}

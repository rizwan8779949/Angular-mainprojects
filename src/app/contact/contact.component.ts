import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 myData={};
  constructor(private http:Http) { }
  send()
  {
    console.log(this.myData);
  }
  ngOnInit() {
  }

}

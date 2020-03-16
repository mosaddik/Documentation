import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit,AfterViewInit {
  @ViewChild('nav') nav;
  constructor() { }
  ngAfterViewInit(): void {
   
  }
  
  ngOnInit() {
  }

  click(){
    //console.log("Hello world");
    console.log(this.nav.nativeElement);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
    selector:'my-home',
    template:`<h1>{{msg}}</h1>`
})
export class HomeComponent implements OnInit {
    public msg:string;

    ngOnInit(){
        this.msg = "Hello World";
    }
}
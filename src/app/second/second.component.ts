import { Component, OnInit} from '@angular/core';

@Component({
    selector:'my-second',
    template:`<h1>{{msg}}</h1>`
})
export class SecondComponent implements OnInit {
    public msg:string;

    ngOnInit(){
        this.msg='Goodbye world';
    }
}
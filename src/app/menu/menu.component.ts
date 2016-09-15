import { Component, OnInit } from '@angular/core';

import { Menu } from './menu';
import { MenuService } from './menu.service';

@Component({
    selector:'my-menu',
    template:`
    <nav *ngIf="menuConfig" class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <span class="navbar-brand" href="#">{{menuConfig.title}}</span>
            </div>
            <ul class="nav navbar-nav">
                <li *ngFor="let option of menuConfig.options" ><a routerLink="/{{option.route}}">{{option.title}}</a></li>
            </ul>
        </div><!-- /.container-fluid -->
    </nav>`
})
export class MenuComponent implements OnInit {
    public menuConfig:Menu;

    constructor( private _service:MenuService){}

    ngOnInit(){
        this._service.getMenuConfig().subscribe(
            data => { this.menuConfig = data; },
            error => { throw new Error (error); }
        );
    }
}
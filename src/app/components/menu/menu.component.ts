import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  opened=false;
  itemsMenu: any[] = [
    {
      'titulo':'Home',
     'icon':'bi bi-house',
     'routerLink':''
    },
    {
     'titulo':'CV',
     'icon':'bi bi-file-text',
     'routerLink':'/cv'
    },
    {
     'titulo':'Contact',
     'icon':'bi bi-clipboard',
     'routerLink':'/contact',
     
    }
  ];

  showIcon:boolean = true;
  addClass:string = "hidden";
  noAddClass:string = "visible";
  constructor() { 
  
  }

  ngOnInit(): void {
  }

}

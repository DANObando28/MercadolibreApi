import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service';
import {Item} from '../item';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  items:Item[];

  constructor(private itemService:ItemService) { }

  ngOnInit() {
  }

  Getitems (name:string):void {
    this.itemService.getItem(name).subscribe(data=>this.items=data.results);
    console.log(`hola ${name}`);         
  }

}

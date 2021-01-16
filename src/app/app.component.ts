import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ShoppingItem} from './core/store/models/interfaces/ShoppingItem';
import {Store} from '@ngrx/store';
import {AppState} from './core/store/states/AppState';
import {AddItemAction, DeleteItemAction, LoadShoppingAction} from './core/store/actions/shopping.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() {
  }
  ngOnInit(): void {}
}

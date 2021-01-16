import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShoppingRoutingModule} from './shopping-routing.module';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingService} from '../core/services/shopping.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ShoppingListComponent],
  imports: [
    CommonModule,FormsModule,
    ShoppingRoutingModule
  ],
  providers: [ShoppingService]
})
export class ShoppingModule {
}

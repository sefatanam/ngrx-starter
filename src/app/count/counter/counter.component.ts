import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from '../../core/store/actions/counter.action';


/**
 * Counter Component
 */

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;


  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  /**
   * Incrementing Counter value to the store
   */
  increment(): void {
    this.store.dispatch(increment());
  }

  /**
   * Decrement Counter Value to the store
   */
  decrement(): void {
    this.store.dispatch(decrement());
  }

  /**
   * Resetting Counter value to the store
   */
  reset(): void {
    this.store.dispatch(reset());
  }
}

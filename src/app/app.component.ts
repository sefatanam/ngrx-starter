import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  count: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count = store.select('count');
  }

  ngOnInit(): void {
  }

}

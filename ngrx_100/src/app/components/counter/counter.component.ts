import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from 'src/app/state/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor (private store: Store<{counter: number}>) {}

  counter$: Observable<number> = this.store.select('counter')

  increment() {
    this.store.dispatch(CounterActions.increment())
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement())
  }

  reset() {
    this.store.dispatch(CounterActions.reset())
  }


}

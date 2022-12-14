import { Component, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngxs/store';
import { Add } from './state/count.actions';
import { CountNumbers } from './state/state.state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(CountNumbers.seeCount).subscribe(console.log);
  }

  add() {
    this.store.dispatch(new Add(4));
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CountNumbers } from '../state/state.state';

@Component({
  selector: 'app-other-component',
  templateUrl: './other-component.component.html',
  styleUrls: ['./other-component.component.css'],
})
export class OtherComponentComponent implements OnInit {
  num: number = 0;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(CountNumbers.seeCount).subscribe((n) => (this.num = n));
  }
}

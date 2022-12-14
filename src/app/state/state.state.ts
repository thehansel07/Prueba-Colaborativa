import { state } from '@angular/animations';
import { Store } from '@ngxs/store';
import { StateContext } from '@ngxs/store';
import { State } from '@ngxs/store';
import { Action } from '@ngxs/store';
import { Selector } from '@ngxs/store';
import { Add } from './count.actions';

interface ICounter {
  count: number;
}

@State<ICounter>({
  name: 'count',
  defaults: {
    count: 0,
  },
})
export class CountNumbers {
  @Selector()
  static seeCount({ count }: ICounter) {
    return count;
  }

  @Action(Add)
  add(
    { setState, getState, patchState }: StateContext<ICounter>,
    { add }: Add
  ) {
    const { count } = getState();
    return patchState({
      count: count + add,
    });
  }
}

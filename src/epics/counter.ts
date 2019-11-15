import { Epic } from 'redux-observable';
import { delay, switchMap } from 'rxjs/operators';
import { AnyAction } from 'redux';

import * as actions from '../slices/index';
import { concat, of } from 'rxjs';

export const incrementAfterDelay: Epic<any> = (action$) =>
  action$.ofType(actions.incrementAfterDelay).pipe(
    delay(1000),
    switchMap(() => {
      return concat(of(actions.increment()));
    }),
  );

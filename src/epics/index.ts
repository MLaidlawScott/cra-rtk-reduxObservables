import { combineEpics } from 'redux-observable';

import { incrementAfterDelay} from './counter';

export const rootEpic = combineEpics(incrementAfterDelay);
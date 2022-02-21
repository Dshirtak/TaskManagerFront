import { all } from 'redux-saga/effects';
import tasksSaga from '../containers/homePage/saga';


export default function* rootSaga() {
    yield all([tasksSaga()]);
}
//yield all([charactersSaga()]);

  
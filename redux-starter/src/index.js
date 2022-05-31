import store from './store';
import {bugAdded, bugRemoved} from './actions'



store.subscribe(()=>{
  console.log("Store changed", store.getState());  // esta funcion sirve para saber cada vez que cambia el store
})

store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugRemoved(1));

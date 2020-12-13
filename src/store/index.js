import {createStore} from 'redux'
import reducer from '../reducers'

const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(()=>{
    console.log("stored value"+store.getState())
   
})
export default store;
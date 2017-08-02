import {createStore} from 'redux'
import reducers from '../reducers'
import {setValue} from '../actions'

const store = createStore(reducers)
store.subscribe( ()=> {
  const state = store.getState()
  console.log("SUP", state)
})

store.dispatch({type: '@@INIT'})
store.dispatch(setValue(100))

export default store

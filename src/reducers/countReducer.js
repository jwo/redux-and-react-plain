
export default function countReducer(state=0, action){
  if (action.type === 'SET_VALUE'){
    return action.value;
  } else if (action.type === 'INCREMENT'){
    return state + 1
  } else if (action.type === 'DECREMENT'){
    return state - 1
  }
  return state;
}

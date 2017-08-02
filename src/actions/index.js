export function increment(){
  return {
    type: 'INCREMENT'
  }
}

export function decrement(){
  return {
    type: 'DECREMENT'
  }
}

export function setValue(value){
  return {
    type: 'SET_VALUE',
    value: value
  }
}

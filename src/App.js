import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {increment, decrement} from './actions'


class App extends Component {

  constructor(props){
    super(props)
    console.log(props)

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement(){
    // this.setState({})
    this.props.dispatch(increment())
  }

  handleDecrement(){
    this.props.dispatch(decrement())
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>REDUX UX UX </h2>
        </div>
        <p className="App-intro">
          NUMBER: {this.props.count}
        </p>

        <div>
          <button onClick={this.handleIncrement}>+</button>

          <button onClick={this.handleDecrement}>-</button>
        </div>
      </div>
    );
  }
}

//export default App;

// Let's export a version of App that's connected to redux

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}
export default connect(mapStateToProps)(App);

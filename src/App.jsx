import { Component } from 'react'

export class App extends Component {

  constructor(){
    super()
    this.state={
      count: 0
    }
  }

  inc() {
    this.setState({
      count: this.state.count + 1
    },console.log(this.state.count))
  }

  dec() {
    this.setState({
      count: this.state.count - 1
    },console.log(this.state.count))
  }

  reset() {
    this.setState({
      count: 0
    },console.log(this.state.count))
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <div className='button'>
          <button onClick={() => this.inc()}>+</button>
          <button onClick={() => this.dec()}>-</button>
          <button onClick={() => this.reset()}>Reset</button>
        </div>
      </div>
    )
  }
}

export default App


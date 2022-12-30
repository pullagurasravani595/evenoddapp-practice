// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {increment: 0}

  onIncrementBtn = () => {
    const randomNum = Math.random()
    const numValue = Math.ceil(randomNum * 10)
    let newValue

    if (numValue < 101) {
      newValue = numValue
    } else {
      newValue = 0
    }

    this.setState(prevState => ({increment: prevState.increment + newValue}))
  }

  render() {
    const {increment} = this.state

    const text = increment % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="main-container">
        <div className="second-container">
          <h1 className="heading">Count {increment}</h1>
          <p className="description">Count is {text}</p>
          <button
            type="button"
            className="button"
            onClick={this.onIncrementBtn}
          >
            Increment
          </button>
          <p className="small-description">
            *Increase Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

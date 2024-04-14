// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  isFirstNameBtn = () => {
    this.setState(prevValue => ({isFirstName: !prevValue.isFirstName}))
  }

  isLastNameBtn = () => {
    this.setState(prevValue => ({isLastName: !prevValue.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>

        <div className="show-and-hide-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.isFirstNameBtn}
            >
              Show/Hide Firstname
            </button>

            {isFirstName && <p className="name-heading">Joe</p>}
          </div>

          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.isLastNameBtn}
            >
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name-heading">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide

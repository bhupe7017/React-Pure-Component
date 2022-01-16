import React, { Component } from 'react'
import './App.css'
import ParentCom from './component/ParentCom'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <ParentCom />
      </div>
    )
  }
}


export default App
import React, { Component } from 'react'
import PersonCard from './components/PersonCard'

export class App extends Component {
  render() {
    return (
      <div className='container border border-primary my-3 p-3'>
        {/* <h1>App</h1> */}
        {/* props are READ ONLY */}
        <PersonCard personName='Doe, Jane' personHair='Black' age={45} />
        <PersonCard personName='Smith, John' personHair='Brown' age={88} />
        <PersonCard personName='Fillmore, Millard' personHair='Brown' age={50} />
        <PersonCard personName='Smith, Maria' personHair='Brown' age={62} />
      </div>
    )
  }
}

export default App 
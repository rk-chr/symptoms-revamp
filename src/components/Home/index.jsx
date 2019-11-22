import React from 'react'
import Doc from '../../assests/doc.png'
import { styledHome } from '../../styled-components'

class Home extends React.Component {
  render() {
    return (
      <styledHome>
        <div className="image">
          <img src={Doc} alt="home logo" />
        </div>
        <div className="user">
          <h3>Hello</h3>
        </div>
      </styledHome>
    )
  }
}

export default Home

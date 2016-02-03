import React from 'react'

export default class UserDetails extends React.Component {
  constructor () {
    super();

    this.state = {
      user: {
        name: "Nicolas Pirotte"
      }
    }
  }

  render () {
    return (
      <div className="well">
        <h3>Welcome {this.state.user.name}</h3>
      </div>
    )
  }
}

import React from 'react'

import UserDetails from './User/UserDetails.jsx'
import TaskList from './Tasks/TaskList.jsx'
import TaskForm from './Tasks/TaskForm.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <UserDetails />
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    )
  }
}

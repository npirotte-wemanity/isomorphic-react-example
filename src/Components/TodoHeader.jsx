import React from 'react'

import TodoActions from '../Actions/TodoActions.js'

var TodoHeader = React.createClass({
  render () {
    return (
      <header id='header'>
        <div>
          <h3>
            Todo
          </h3>
          <form onSubmit={this.handleSubmit}>
            <div className='control-group'>
              <input ref='text' className='form-control' type='text' id='new-todo' placeholder='What needs to be done?' autoFocus/>
            </div>
          </form>
          <br />
        </div>
      </header>
    )
  },

  handleSubmit (evt) {
    const input = this.refs.text
    var text = input.value
    TodoActions.addItem(text)
    input.value = ''

    evt.preventDefault()
  }
})

export default TodoHeader

import React from 'react'

import TodoActions from '../Actions/TodoActions.js'

import {AppBar, TextField} from 'material-ui/lib'

var TodoHeader = React.createClass({
  render () {
    return (
      <header id='header'>
        <AppBar
          title='Todos'
          showMenuIconButton={false} />
        <TextField id='new-todo' hintText='What needs to be done?' autoFocus onKeyUp={this.handleValueChange}/>
      </header>
    )
  },

  handleValueChange (evt) {
    var text = evt.target.value
    var which = evt.which

    if (which === 13 && text) {
      TodoActions.addItem(text)
      evt.target.value = ''
    } else if (which === 27) {
      evt.target.value = ''
    }
  }
})

export default TodoHeader

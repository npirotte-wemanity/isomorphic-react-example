import Reflux from 'Reflux'

const TodoAction = Reflux.createActions([
  'toggleItem',
  'toggleAllItems',
  'addItem',
  'removeItem',
  'clearCompleted',
  'editItem'
])

export default TodoAction

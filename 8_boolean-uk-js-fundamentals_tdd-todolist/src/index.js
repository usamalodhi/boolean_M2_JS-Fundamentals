import TodoList from './TodoList';

class ToDoListFunctionality extends TodoList {
  constructor() {
    //delete after checking
    // this.todoListObj = [];
    // this.todoId = 1;
    // this.date = new Date();
    // this.day = { weekday: 'long' };
    super();
  }
  //Get all todo items
  getAllTodo() {
    return this.todoListObj;
  }

  //Set a todo completed by its ID
  setDoneTodo(id) {
    const doneTodo = this.todoListObj.find((task) => task.id === id);
    doneTodo.status = 'complete';
    return doneTodo;
  }

  //Get only todo items that are incomplete
  getIncompleteTodo() {
    const incompleteTodo = this.todoListObj.find(
      (task) => task.status === 'incomplete'
    );
    return incompleteTodo;
  }

  //Get only todo items that are complete
  getCompleteTodo() {
    const completeTodo = this.todoListObj.find(
      (todoItem) => todoItem.status === 'complete'
    );
    return completeTodo;
  }

  //Search and return a todo item by its ID, or return a message saying it doesn’t exist
  findbyIDTodo(id) {
    const findTodo = this.todoListObj.find((task) => task.id === id);
    if (!findTodo) return 'There is no todo task with this id';
    return findTodo;
  }

  //Remove a todo item by its ID
  removebyIDTodo(id) {
    this.todoListObj = this.todoListObj.filter((task) => task.id !== id);
    return this.todoListObj;
  }

  //Search todo items by day and see a list of todo items by the day they were created else return []
  findbyDateTodo(date) {
    const findFromDateTodo = this.todoListObj.find(
      (task) => task.date === date
    );
    if (!findFromDateTodo) return [];
    return findFromDateTodo;
  }
}

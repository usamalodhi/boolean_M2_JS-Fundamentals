class TodoList {
  constructor() {
    this.todoListObj = [];
    this.doneTodoList = [];
    this.incompleteTodoList = [];
    this.todoId = 1;
    this.date = new Date();
    this.day = { weekday: 'long' };
  }

  //Create a todo item that has an ID, text description, and starts off incomplete
  createTodo(todoItem) {
    let todoObj = {
      id: this.todoId,
      text: todoItem,
      status: 'incomplete',
      date: this.date.toLocaleDateString('en-GB', this.day),
    };
    this.todoListObj.push(todoObj);
    this.todoId = this.todoId + 1;
    return todoObj;
  }
  getAllTodo() {
    return this.todoListObj;
  }

  //Set a todo completed by its ID
  setDoneTodo(id) {
    let doneTodo = this.todoListObj.find((task) => task.id === id);
    doneTodo.status = 'complete';
    return this.todoListObj;
  }

  //Get only todo items that are incomplete
  getIncompleteTodo() {
    let incompleteTodo = this.todoListObj.filter(
      (task) => task.status === 'incomplete'
    );
    return incompleteTodo;
  }

  getCompleteTodo() {
    let completeTodo = this.todoListObj.filter(
      (task) => task.status === 'complete'
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

let todo = new TodoList();

module.exports = TodoList;

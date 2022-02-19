const TodoList = require('../src/TodoList');

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });
  // test 1 - create first todo: todo 1
  it('creates a new todo: todo 1', () => {
    // set up
    let expected = {
      id: 1,
      text: 'go to the shops',
      status: 'incomplete',
      date: 'Tuesday',
    };
    // execute
    let result = todoList.createTodo('go to the shops');
    // verify
    expect(result).toEqual(expected);
  });
  // test 2 - get all
  it('returns all todos currently present', () => {
    // set up
    let expected = [
      {
        id: 1,
        text: 'go to the shops',
        status: 'incomplete',
        date: 'Tuesday',
      },
    ];
    // execute
    todoList.createTodo('go to the shops');
    todoList.getAllTodo();
    // verify
    expect(todoList.getAllTodo()).toEqual(expected);
  });
  // test 3 - change incomplete todo to complete todo by id
  it('changes incomplete todo to complete todo by id', () => {
    // set up
    let expected = [
      {
        id: 1,
        text: 'go to the shops',
        status: 'complete',
        date: 'Tuesday',
      },
    ];
    // execute
    todoList.createTodo('go to the shops');
    todoList.setDoneTodo(1);
    // verify
    expect(todoList.setDoneTodo(1)).toEqual(expected);
  });
  // test 4 - create two todos and get both of them
  it('creates two todos', () => {
    // set up
    let expected = [
      {
        id: 1,
        text: 'go to the shops',
        status: 'incomplete',
        date: 'Tuesday',
      },
      {
        id: 2,
        text: 'walk the dog',
        status: 'incomplete',
        date: 'Tuesday',
      },
    ];
    // execute
    todoList.createTodo('go to the shops');
    todoList.createTodo('walk the dog');
    // verify
    expect(todoList.getAllTodo()).toEqual(expected);
  });
  // test 5 - get incomplete todos
  it('gets incomplete todos', () => {
    // set up
    let expected = [
      {
        id: 1,
        text: 'go to the shops',
        status: 'incomplete',
        date: 'Tuesday',
      },
    ];
    // execute
    todoList.createTodo('go to the shops');
    todoList.createTodo('walk the dog');
    todoList.setDoneTodo(2);
    todoList.getIncompleteTodo();
    // verify
    expect(todoList.getIncompleteTodo()).toEqual(expected);
  });
  // test 6 - get complete todos
  it('gets complete todos', () => {
    // set up
    let expected = [
      {
        id: 1,
        text: 'go to the shops',
        status: 'complete',
        date: 'Tuesday',
      },
      {
        id: 3,
        text: 'go to the shops again',
        status: 'complete',
        date: 'Tuesday',
      },
    ];
    // execute
    todoList.createTodo('go to the shops');
    todoList.createTodo('walk the dog');
    todoList.createTodo('go to the shops again');
    todoList.setDoneTodo(1);
    todoList.setDoneTodo(3);
    todoList.getCompleteTodo();

    // verify
    expect(todoList.getCompleteTodo()).toEqual(expected);
  });
  // test 7 - find by ID Todo
  it('find todo with ID 3', () => {
    // set up
    let expected = {
      id: 3,
      text: 'go to the shops again',
      status: 'incomplete',
      date: 'Tuesday',
    };
    // execute
    todoList.createTodo('go to the shops');
    todoList.createTodo('walk the dog');
    todoList.createTodo('go to the shops again');
    todoList.findbyIDTodo(3);
    // verify
    expect(todoList.findbyIDTodo(3)).toEqual(expected);
  });
  // test 8 - remove ID by todo
  it('remove todos by id', () => {
    // set up
    let expected = [
      {
        id: 1,
        text: 'go to the shops',
        status: 'incomplete',
        date: 'Tuesday',
      },
      {
        id: 3,
        text: 'go to the shops again',
        status: 'incomplete',
        date: 'Tuesday',
      },
    ];
    // execute
    todoList.createTodo('go to the shops');
    todoList.createTodo('walk the dog');
    todoList.createTodo('go to the shops again');
    todoList.removebyIDTodo(2);

    // verify
    expect(todoList.removebyIDTodo(2)).toEqual(expected);
  });
});

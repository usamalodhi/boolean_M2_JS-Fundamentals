# Variables

Variables are used to store values. Before a variable can be used, it must be **declared**.

> 👨‍💻 Run these examples in your REPL as you read along! 👨‍💻

 In JavaScript, we can declare variables using the `const` keyword. The below code declares a variable called `name`, and sets the value to "Jane":

```javascript
const name='Jane'
```
Variables that are declared using `const` cannot change their value - their value is **constant** (try change it and see what happens!). The `let` keyword can be used to declare a variable that can change value:
```javascript
let otherName='Jane'

//We can now assign a new value to name
otherName='Bob'
```

In Javascript, any valid data type can be stored in a variable. The above example created a variable that stored a `string` data type. `string` values are always enclosed in quotes. Numbers can be stored in variables too:

```javascript
const age = 10
```

Variable names should always be descriptive. In JavaScript, it's also conventional to use camelCase when naming your variables. For example:

```javascript
const firstName = 'Jane'
```

## Next
Work your way through the tests for this section. You can use the references below and also
the `example.js` file to see more code samples. Remember you can make use of the Node REPL 
to try out and experiment with code.

## References

* [Boolean Variables Slides](https://docs.google.com/presentation/d/17blHGDVfjN_EerQtw0ybFDtJEhjj9wAU9qHoI1DAnYw/edit?usp=sharing)
* [MDN Declaring Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)
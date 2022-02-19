# Loops
Loops are used to run code multiple times. In JavaScript, there are many different types of loops. We are going to focus on `for` loops. 

> 👨‍💻 Run the example below in your REPL 👨‍💻

Here's an example of a loop that will print the numbers 0 to 4:

```javascript
for (let i=0; i<5; i++) {
  console.log(i)
}
>>> 0
>>> 1
>>> 2
>>> 3
>>> 4
```

Let's deconstruct how the for loop works. First, we start with the `for` keyword:

```javascript
for 
```

We then have a open bracket `(`, with 3 sections divided by semicolons:

```javascript
//   ---1--- -2-- --3--
for (let i=0; i<5; i++)
```

The first step (`let i = 0;`) is called *initialisation*. The expression we write here will run only *once*, before the whole loop begins. Most of the time, you will see loops declare an `i` variable that starts at 0. 

The second step (`i < 5`) is called *condition*. The expression we write here will be evaluated 
at the start of evert loop run. If the expression is truthy, the loop will continue running, if it is falsy, the loop ends. Here, we are checking if the `i` variable we created is lower than 5

The last step (`i++`) is called the *finalisation*. The expression we write here will run at the end of every iteration

```javascript
for (let i=0; i<5; i++) {
  console.log(i)
}
```

Finally, between the curly brackets `{}` we have the block, or the loop body. This code will run over and over as long as the condition remains truthy, and within it, we have access to any variables we declared in the initialization step.

The result of running this code is that we log the `i` counter to the console 5 times. Breaking it down, the execution looks like this:

* Run the **initialization**: Create the `i` variable and set it to 0
* Run the **condition**: Is `i<5`? Yes, it's 0. So the loop body is executed:
  * `console.log(i) //prints 0`
* Run the **finalisation**: `i++`
* Run the **condition**: Is `i<5`? Yes, it's 1. So the loop body is executed:
  * `console.log(i) //prints 1`
* Run the **finalisation**: `i++`
* Run the **condition**: Is `i<5`? Yes, it's 2. So the loop body is executed:
  * `console.log(i) //prints 2`
* Run the **finalisation**: `i++`
* Run the **condition**: Is `i<5`? Yes, it's 3. So the loop body is executed:
  * `console.log(i) //prints 3`
* Run the **finalisation**: `i++`
* Run the **condition**: Is `i<5`? Yes, it's 3. So the loop body is executed:
  * `console.log(i) //prints 4`
* Run the **finalisation**: `i++`
* Run the **condition**: Is `i<5`? NO! It's 5. 
* **The loop ends**

**Note** Although in this case we started `i` at 0 - it doesn't need to. You can start `i` at any value you like. The variable name doesn't even need to be `i`! The same goes for the *finalisation* step. `i++` is a very common idiom and you'll see it a lot. If we wanted to though, we could also decrement i, or add another value to it. For example, if you want to print the numbers from 10 to 1, you could write a loop like this:

```javascript
for (let i=10; i>0; i--) {
  console.log(i)
}
```

## Loops and Arrays
For loops become even more powerful when we combine them with arrays. 

> 👨‍💻 Run the example below in your REPL 👨‍💻

Using what we've learned about for loops so far, we can use `array.length` to iterate through all the items in an array like so:

```javascript
const names = ['Mike', 'Ed', 'Steven']
for (let i=0; i<names.length; i++) {
  console.log(names[i])
}
```

Rather than running the loop wile the `i` counter is less than a fixed number, we use the `array.length` property.

## Next
Work your way through the tests for this section. You can use the references below and also
the `example.js` file to see more code samples. Remember you can make use of the Node REPL 
to try out and experiment with code.

## References
* [Boolean Loops Slides](https://docs.google.com/presentation/d/1GSh7zybHz3R9Dt0xjGFbJJidhz8bQHi01liJDcjmxCg/edit?usp=sharing)
* [MDN Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)



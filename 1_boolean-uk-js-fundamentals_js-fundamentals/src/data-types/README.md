# Data Types
From text and numbers to lists, people and actions, everything in JavaScript can be represented using data types. Here are the most important ones.

**Primitive types**: These are units that cannot be broken down any further

| Data Type      | Examples                 | Purpose | 
| -------------- | -----------              | ------- |
| Boolean        | `false`, `true`          | Answer yes or no questions
| Number         |  `-1`, `0`, `20`, `100`  | Represent numeric things and do math
| String         | `"Hello"`                | Represent text
| Null           |  `null`                  | Represent explicit nothingness
| Undefined      |  `undefined`             | Represent implicit nothingness


**Composite types**: These are units that can be broken down further

| Data Type      | Examples                     | Purpose | 
| -------------- | -----------                  | ------- |
| Object         | `{name: "Nico", age: 33 }`   |  Represent any object with multiple properties
| Array           |`[0, 10, 3]`, `["Buy milk", "Cook dinner", "Sleep"]` | Represent lists of things


## Booleans
```javascript
const isCodingFun = true
```
There’s really not much we can do with a boolean by itself, yet, as we will see later on when we cover conditionals, they are crucial to programming. We usually get true or false as a result of asking our program a question. 

> 👨‍💻 Run these examples in your REPL as you read along! 👨‍💻

```javascript
5 > 3 //Is 5 greater than 3? 
>>> true
```

```javascript
5 > 10 //Is 5 greater than 10? 
>>> false
```

Booleans can be flipped by adding an exclamation mark right before it:

```javascript
!true
>>> false
```

```javascript
!false
>>> true
```

## Numbers
```javascript
const age = 20
```
As you might expect, anything that you can usually do with numbers you can do in JavaScript. 

> 👨‍💻 Run these examples in your REPL as you read along! 👨‍💻

```javascript
10 + 10 //addition
>>> 30
``` 

```javascript
10 - 10 //subtraction
>>> 10
``` 

```javascript
10 - 10 //multiplication
>>> 10
``` 

```javascript
10 / 10 //division
>>> 1
``` 

```javascript
24 % 5 // remainder of 24 / 5
>>> 4
```

The above examples all use literal values (i.e. a specific number), but we can also perform these operations with variables and store any result in a variable too:

```javascript
const price = 10
const quantity = 2
const cost = price * quantity 
console.log(price)
>>> 10
```

## Strings
```javascript
const name = 'Jane'
```
Strings are simply how we represent text within our programs, from a single character to a whole book. 

> 👨‍💻 Run these examples in your REPL as you read along! 👨‍💻

In JavaScript, we can create a string by wrapping our characters in single , double quotes or backticks:

```javascript
"hey there!"
'hey there!'
`hey there!`
```

We can add strings together by using the plus `+` operator. This is called **concatenation**. 

Run the below code exmaples in your REPL:

```javascript
'Hello' + 'there!'
>> 'Hellothere!'
```

We can also concatenate string variables:

```javascript
const teacher = 'Nicolas'
'Hello ' + teacher + '!'
>>> 'Hello Nicolas!'
```

Adding variables to a string is called interpolation, and you’ll be doing this a lot! We can also use strings wrapped in back quotes (or backticks) to achieve the same result. This code is equivalent to the above example:

```javascript
const teacherLiteral = 'Nicolas'
`Hello ${teacherLiteral} !`
>>> 'Hello Nicolas!'
```

This is called a **template literal**.

Strings also have a TON of useful helper methods and properties. Here’s a couple of really useful ones, but feel free to explore more in the console:

```javascript
const name = 'Nicolas'
name.length
>>> 7
```

```javascript
const nameUpper = 'Nicolas'
nameUpper.toUpperCase()
>>> 'NICOLAS'
```

You can also extract a specific character from a string by using the square brackets syntax `string[index]`:

```javascript
const hello = 'Hello'
hello[1] //the index is 0 based! This will return the 2nd character
>>> 'e'
```

## Next
Work your way through the tests for this section. You can use the references below and also
the `example.js` file to see more code samples. Remember you can make use of the Node REPL 
to try out and experiment with code.

## References
* [Boolean Variables Slides](https://docs.google.com/presentation/d/17blHGDVfjN_EerQtw0ybFDtJEhjj9wAU9qHoI1DAnYw/edit?usp=sharing)
* [Boolean Strings Slides](https://docs.google.com/presentation/d/1w_cS-TIrEfROoA-OPsC_AxAkdu-1BNkdqkEq-qroNsE/edit?usp=sharing)
* [MDN Data Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
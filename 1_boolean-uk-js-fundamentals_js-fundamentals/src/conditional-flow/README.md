# Conditional Flow

## Booleans 
Booleans and conditional flow are closely related. Booleans are used to store `true` or `false` values in our code. We can set variables to `true` or `false` directly:

```javascript
const isTrue = true
const isFalse = false
```

> 👨‍💻 Run these examples in your REPL as you read along! 👨‍💻

But more commonly we can also store the result of a comparison:

```javascript
const myBool = 5 > 3 //myBool will be set to true
myBool
>>> false
```

Rather than comparing fixed numbers like 3 and 5, we can also compare variables:

```javascript
const age = 10
const isOver18 = age > 18 //isOver18 will be set to false
isOver18
>>> false
```

In the above example we check if `age` is greater than 18, but there are many different types of comparisons available:

* Is equal to `10 === 10`
* Is not equal to `10 !== 10`
* Is greater than `10 > 10`
* Is less than `10 < 10`
* Is greater or equal to `10 >= 10` 
* Is less or equal to `10 <= 10`

As well as comparing numbers, we can also compare strings:

```javascript
"Nicolas" === "Nicolas"
>>> true
```

```javascript
"Nicolas" === "nicolas"
>>> false // it’s case-sensitive
```

```javascript
"Nicolas" !== "nicolas"
>>> true 
```

We are not limited to a single comparison - we can use multiple comparisons chained together with either the the logical AND operator `&&` or the logical OR operator `||` (2 pipe characters). 

For a chained comparison to return true, `&&` requires that *all* combined expressions are also `true`. For example

```javascript
let age = 10
let isTeenager = age > 12 && age < 20 //false, as age is under 20 but not over 12
>>> false
```

```javascript
age = 14
isTeenager = age > 12 && age < 20 //true, as age is under 20 and over 12
>>> true
```

```javascript
age = 21
isTeenager = age > 12 && age < 20 //false, as age is over 20 even though greater than 12
>>> false
```

The OR operator `||` requires that *any of* combined expressions are `true` for the chained expression to return true. For example:

```javascript
age = 10
let withParent = true
isAllowed = age > 17 || withParent //true, withParent is true even though age>17 is false
>>> true
```

```javascript
age = 10
withParent = false
isAllowed = age > 17 || withParent //false, withParent is false and age>17 is false
>>> false
```

## If Statement
Up until now, whatever we were writing was being executed when our program ran. Conditions allow us to execute some code only if a condition is met. The main way to implement a condition in JavaScript is by using an `if` statement. 

> 👨‍💻 Run these examples in your REPL as you read along! 👨‍💻

Here's a basic example

```javascript
if (true) {
  console.log("It's true!")
} 

if (false) {
  console.log("It's not true?")
} 
```

If we run this code, only the first statement is printed. This is because an `if` statement will only run code in the following block (everything between the curly braces immediately after the `if`) when the expression in between the brackets evaluates to `true`. 

For example, we can provide a boolean variable:

```javascript
age = 20
isAllowed = age > 18
if (isAllowed) {
  console.log("You can come in!")
}
```

But, we can also shorten this and simply provide the expression (`age > 18`) instead:

```javascript
if (age > 18) {
  console.log("You can come in!")
}
```

We can also use the logical AND `&&` and logical OR `||` operators to chain expressions:

```javascript
//Only allowed in if age greater than 18 AND less than 65
if (age > 18 && age < 65) {
  console.log("You can come in!")
}
```

```javascript
//Only allowed in if age greater than 18 OR with a parent
if (age > 18 || withParent) {
  console.log("You can come in!")
}
```

If we want to execute some code when an `if` statement evaluates to false, we can use the `else` keyword:

```javascript
//Only allowed in if age greater than 18 OR with a parent
if (age > 18) {
  console.log("You can come in!")
}
else {
  console.log("Come back when you're older!")
}
```

The `else if` statement can be used to execute alternative code as long another if condition is met:

```javascript
if (age < 18) { //If under 18
  console.log("Come back when you're older!")
}
else if (age > 65) { //If over 18 and older than 65
  console.log("Enjoy your retirement!")
}
else { //If over 18 and younger than 65
 console.log("You can come in!")
}
```

## Switch

If you have a lot of comparisons to do, the switch statement can sometimes be a useful alternative to a many `if`/`else` statements:

```javascript
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    dayType = "Weekday"
  break;
  default:
    dayType = "Weekend"
}
```

## Next
Work your way through the tests for this section. You can use the references below and also
the `example.js` file to see more code samples. Remember you can make use of the Node REPL 
to try out and experiment with code.

## References
* [Boolean Conditional Flow Slides](https://docs.google.com/presentation/d/17YZv-apFaaFM0ICtIwZN2moSpKtS4-Mq-heCy6L7kxo/edit#slide=id.gd46f8ee6d4_0_8)
* [MDN If...Else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
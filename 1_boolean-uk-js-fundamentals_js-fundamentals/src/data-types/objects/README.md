# Objects
Let’s say you are trying to represent a person using code. What kind of attributes do you think are important to store about a person? How would you store these attributes using what you know so far? Perhaps we'd try something like this:

```javascript
const firstName = 'Nicolas'
const lastName = 'Marcora'
const age = 33
```

Mmm, ok. What if we want to have a second person?

```javascript
const firstName1 = 'Nicolas'
const lastName1 = 'Marcora'
const age1 = 33

const firstName2 = 'Sergio'
const lastName2 = 'Neves'
const age2 = 30
```

How could we make this better? The answer is **Objects**. JavaScript objects are a data type that consists of keys and values, wrapped with curly braces. We can use objects to collect together related properties that represent a single instance of something, like a person:

```javascript
const person = {
  firstName: 'Nicolas',
  lastName: 'Marcora',
  age: 33
}
```

Objects are composed of **Key value pairs**, separated by a colon (`:`). In the example above, there are
3 key value pairs:

1. The key `firstName` with a value of `Nicolas`
2. The key `lastName` with a value of `Marcona`
3. The key `age` with a value of 33.

Keys are always strings, but values can be any valid JavaScript datatype: number, string, booleans, null, undefined, array and even object. 

> 👨‍💻 Run these examples in your REPL as you read along! 👨‍💻

Let's look at how we can add keys to an object. Starting with a blank object:

```javascript
const instructor = {}
```

We can add a new key using the `object[key]` syntax:

```javascript
instructor['firstName'] = 'Nicolas'
>>> { firstName: 'Nicolas' }
```

And, if you don’t have any special characters, this cleaner syntax (also know as dot notation) does the same thing:

```javascript
instructor.lastName = 'Marcora'
>>> { firstName: 'Nicolas', lastName: 'Marcora' }
```

Similarly, we can read keys from an object using the same syntax. First using `object[key]`:

```javascript
instructor['firstName']
>>> 'Nicolas'
```

...and using dot syntax:

```javascript
instructor.lastName
>>> 'Marcora'
```

Key values can also be updated in the same way:

```javascript
instructor['firstName'] = 'Sergio'
instructor
>>> { firstName: 'Sergio', lastName: 'Marcora' }
```

And the dot notation equivalent:

```javascript
instructor.lastName = instructor.lastName.toUpperCase()
instructor
>>> { firstName: 'Sergio', lastName: 'MARCORA' }
```

Finally, to delete keys from an Object, you can use the `delete` keyword:

```javascript
delete instructor.lastName
instructor
>>> { firstName: 'Sergio' }
```

## Next
Work your way through the tests for this section. You can use the references below and also
the `example.js` file to see more code samples. Remember you can make use of the Node REPL 
to try out and experiment with code.

## References
* [Boolean Objects Slides](https://docs.google.com/presentation/d/1OrCY1WRyXlX29bx99f-RXhx6jYraL9gMkmUE5uo4nBE/edit#slide=id.gd46f8ee6d4_0_18)
* [MDN Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

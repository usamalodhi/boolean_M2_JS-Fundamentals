# Arrays
Variables allow us to store a single value. An `age` variable is a single number, a `name` variable is a single string. But what if we wanted to have not one, but several names stored for later? Or what if we wanted to store a list of tweets or a list of items in a shopping cart?

**Arrays** allow us to do this. Array's are a single data type used to represent a list of things. 

> 👨‍💻 Run these examples in your REPL as you read along! 👨‍💻

For example, the code below creates a list of 3 names:

```javascript
 const instructors = ['Nicolas', 'Sergio', 'Steven']
```

We can add items to an array using helper methods of our array: `.unshift()` and `.push()`.  

`unshift` will add elements to the start of an array and then return the total number of items in the array:

```javascript
instructors.unshift('Mike')
>>> 4
instructors
>>> ['Mike', 'Nicolas', 'Sergio', 'Steven']
```

`push` will add elements to the end of the array and it also returns the total number of items in the array:

```javascript
instructors.push('Ed')
>>> 5
instructors
>>> ['Mike', 'Nicolas', 'Sergio', 'Steven', 'Ed']
```

The `array[index]` syntax reads a single element from an array:

```javascript
instructors[0] // indices start at 0, not 1!
>>> 'Mike'
```

Using `array[index] = newValue`, we can swap the element at a specific location:

```javascript
instructors[1] = 'Lewis'
>>> 'Lewis'
instructors
>>> ['Mike', 'Lewis', 'Sergio', 'Steven', 'Ed']
```

Similar to adding an element, we can remove an element from the start or end of the array using `.shift()` and `.pop()`

`shift` removes elements from the start of the array and returns the removed element

```javascript
instructors.shift()
>>> 'Mike'
instructors
>>> ['Lewis', 'Sergio', 'Steven', 'Ed'] // Mike is gone!
```

`pop` removes elements from the end of the array and also returns the removed element

```javascript
instructors.pop()
>>> 'Ed'
instructors
>>> ['Lewis', 'Sergio', 'Steven'] // And now Ed, too!
```

The `.splice(start, deleteCount)` helper method can be used to delete a segment of the array.

```javascript
instructors.splice(1,1) //delete 1 item starting at index 1
>>> ['Sergio']
instructors // And now Sergio!
['Lewis', 'Steven']
>>>
```

## Next
Work your way through the tests for this section. You can use the references below and also
the `example.js` file to see more code samples. Remember you can make use of the Node REPL 
to try out and experiment with code.

## References
* [Boolean Arrays Slides](https://docs.google.com/presentation/d/1DhM7LtnqKC3qJI_bYKTMjt7H9kMqMgqorhwhvVhtytI/edit?usp=sharing)
* [MDN Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

# Encapsulation 2

## Learning Objectives

- Explain what is meant by a class "exposing implementation details"
- Explain the difference between the public and private interface of a class
- Refactor code to improve encapsulation and hide implementation details

## Example

When we introduced classes, we described a class as an _encapsulation of behavior_. Classes contain both data and methods that operate on that data. We can think of the methods defined (or *exposed*) by a class as the _public interface_ of that the class. Anyone that wants to use or access data controlled by a class should use these methods. The methods on a class should _encapsulate_ any special rules or requirements for accessing that data.

Think of complex objects you use every day. Consider driving a car. The steering wheel, pedals and gears are like the _public interface_ to the car. We don't need to know the details of how an engine works to drive our car. We can just use the simplified interface provided to us. Classes are the same. We want our classes to expose a simple interface that hides the details of how the class works "under the hood".

A class is _well encapsulated_ if we can use the class without having to know anything about it's internals. A class is _poorly encapsulated_ if we need to know details of the class data and internals in order to properly use it.

Consider the below Traffic Light class and it's usage example:

```javascript
class TrafficLight {
  constructor() {
    this.lightColor = "green"
  }

  setColor(color) {
    this.color = color
  }

  getColor() {
    return this.lightColor
  }
}

light = new TrafficLight()
if (light.getColor() === "green") {
  console.log("lets go!")
}

//set it to Red
light.setColor("red")
```

This class demonstrates _poor_ encapsulation. The code using the `TrafficLight` class must know the light color is represented as a string and must also know the string value that means `"green"`. We call this _exposing implementation details_. Other users of our code must know how the class internally stores data in order to use it.

Let's say we wanted to change this class to use several `boolean` variables instead of a string (such as `isRed`, `isGreen`, etc) - we would need to find every other class that uses the `TrafficLight` class and update it.

Other developers may also find it difficult to use this class. What value should I expect from `getColor`? If I call `setColor`, can I provide any value or do I need to provide specific values? Is it valid to say `setColor('black')`? They would have to carefully examine the source file, find documentation, or ask the developer that wrote the class.

Ideally, it should be _obvious_ to other developers how to use a class from the methods it exposes and nothing more. Here is a better version of the `TrafficLight` class that is _well encapsulated_:

```javascript
class TrafficLight {
  constructor() {
    this.lightColor == "green"
  }

  isGreen() {
    return this.lightColor === "green"
  }

  isRed() {
    return this.lightColor === "red"
  }

  setRed() {
    this.lightColor = "red"
  }
}

light = new TrafficLight()
if (light.isGreen()) {
  console.log("lets go!")
}

//set it to Red
light.setRed()
```

Although the internals of the `TrafficLight` class are the same, the methods we are using now _hide the implementation details_ - the code using the class does not know or care that the `TrafficLight` class is using a string to store the color. The methods `isGreen`, `setRed` completely hide the internal representation. They are obviously named and require no additional knowledge to use - we don't need to go and find the correct string value.

## Exercise 1

Consider the `Task` class and the `TaskList` class inside the `src` folder. Look at the `getOverdueTasks` method on `TaskList`. Refactor the classes so that the `TaskList` does not need to know the implementation details of the `Task` class. Set up the project in the usual way:

1. Fork
2. Clone
3. npm install

You can run the jasmine tests to make sure the `getOverdueTasks` method still works as expected.

## Exercise 2

Consider the code in the previous exercise. Even if we add methods to our classes that properly encapsulate the data in the `Task` class, it is still possible for other classes to directly access the class data and bypass the methods. For example:

```javascript
task = new Task()
task.status = "wot!"
```

If other code in the `Task` class or the `TaskList` class assumed the status value would be either `"complete"` or `"incomplete"` the above code could cause those classes to work in an unexpected way.

If we consider the methods we want others to use as the _public interface_ of our class, we can consider the data and methods we **don't** want others to use directly as the _private interface_. Many programming languages contain the ability to differentiate public methods and data (that any other could should be able to access) and _private_ methods and data that should only be accessible by the class itself. In JavaScript classes, we can designate private fields or methods using the `#` symbol. For example:

```javascript
class Person {

  //name is private, it can't be accessed outside the class
  #name

  constructor(name) {
    this.#name = name  
  }

  sayHello() {
    console.log("Hello " + this.#name)
  }
}

```

More details are available on the [MDN documentation site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields). 

* Update the code sample you edited in Exercise 1 to define any methods and data you *wouldn't* want others to use as private.
* Update the tests if required
* What happens if you try and access a private method or field from outside of a class?

## Discussion
* Take the `status` property from the `Task` class above. What if we wanted other classes to be able to read the `status` property, but not change it? How could we support that?
* Why not simply make everything public, in case there is a future situation someone wants to access data directly? Is there any harm in that?

## Note
In the JavaScript world, the private field syntax introduced above is relatively new and not universally adopted. However, the key point here is thinking about a classes **public interface** vs it's **private interface** - what data and methods do you want to expose to other code, and what data should be considered private. Thinking of your code in terms of it's interface and what capabilities it exposes to others is a great way to start thinking about how you will structure your code.

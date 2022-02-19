# Inheritance and Composition

> "Designing object-oriented software is hard, and designing reusable object-oriented software is even harder."
> – Design Patterns: Elements of Reusable Object-Oriented Software

Inheritance and composition - what are they, and where should I use them?

## Learning Objectives

- Know that inheritance cascades methods from a superclass
- Explain how method implementations can be overridden in a subclass
- Use composition as an alternative to inheritance

## Intro
The code snippet below includes three plain old JavaScript classes which share very similar behaviour - a clear violation of the DRY principle.

```js
class Car {
  constructor(topSpeed){
    this.topSpeed = topSpeed
  }

  move() {
    return `moving at ${this.topSpeed}`
  }
}

class Bike {
  constructor(topSpeed){
    this.topSpeed = topSpeed
  }

  move() {
    return `moving at ${this.topSpeed}`
  }
}

class Plane {
  constructor(topSpeed){
    this.topSpeed = topSpeed
  }

  move() {
    return `taking off... moving at ${this.topSpeed}`
  }
}
```

One way of dealing with this repetition is through the use of inheritance:

```js
class Vehicle {
  constructor(topSpeed){
    this.topSpeed = topSpeed
  }

  move() {
    return `moving at ${this.topSpeed}`
  }
}

class Car extends Vehicle {

}

class Bike extends Vehicle {

}

class Plane extends Vehicle {
  move (){
    return `taking off... moving at ${this.topSpeed}`
  }
}
```

We create a superclass (Vehicle) which defines the shared behaviours, and then make our other classes subclasses which inherit these behaviours.  This provides our subclasses with *all* of the behaviours of a vehicle.  As the plane class implements the move method differently, we override it with the desired behaviour.

## Exercise 1
- Refactor the code base to DRY up repetition by implementing inheritance.  
- You should not need to modify the existing unit tests, and they should all still pass once you're done.

## Discussion

Be aware that setting up this kind of hierarchical relationship between objects implies that the subclass __'is a'__ subtype of the base class, otherwise we can arrive at some strange situations.  For example, we might want to create a Person class - a person, like a vehicle, can move but...

```js
class Person extends Vehicle {

}
```  

...is clearly a poor design decision.

The below looks much improved, but **beware**!  Inheritance sets up a tightly coupled relationship between classes - the subclass will inherit **all** of the base class' public interface, whether you want it to or not.

```js
class Vehicle {
  constructor(topSpeed){
    this.topSpeed = topSpeed
  }

  move() {
    return `moving at ${this.topSpeed}`
  }

  startEngine() {
    return "vroooom!!"
  }
}

const bike = new Bike()
bike.startEngine() //  => "vroooom!!"
```

We can overcome this problem through the use of composition.  

```js
class Engine {
  start() {
    "vroooom!"
  }
}

class Car extends Vehicle {
  constructor(topSpeed, engine)
    super(topSpeed) // note the use of super() to invoke the parent class constructor
    this.engine = engine
  }

  startEngine() {
    return engine.start()
  }
}

const car = new Car(100, new Engine())
car.startEngine() // => "vroooom!!"
```
Here we create a new class - Engine - and pass in an instance of it into a Car object through its constructor method.  This pattern allows us to share the behaviour of the engine class with other classes as we see fit - we need only include it where necessary.

### Exercise 2
- Now that you've dealt with the repetition, its time to introduce some new functionality.  Books and articles should both hold information on their authors (Newspapers should not include this functionality, as they are written by multiple individuals).
- Test drive the creation of a new Author class which holds information on the author's name and their publisher's telephone number, then include this functionality in the relevant classes through composition.
- In addition to your newly created tests, ensure that all existing unit tests still pass - it may be necessary to make some alterations.

## Discussion
- Code review - any common problems or themes?
- What are the advantages and disadvantages of the two approaches?

## Resources

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#sub_classing_with_extends
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

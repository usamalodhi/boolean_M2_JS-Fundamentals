# Making code simpler through polymorphism

This workshop is about using polymorphism to build simpler code.

## Quickstart

```sh
# fork and clone this repository
cd to/this/directory
npm install
```

## Learning objectives

1. Describe polymorphism as "being able to use different things in the same way".
2. Explain how polymorphism can be used to build simpler code.
3. Refactor some code to use polymorphism to make it simpler.

## Introduction

### Polymorphism

Here's some code that moves objects:

```js
function move200(vehicle) {
  if (vehicle instanceof Car) {
    vehicle.drive(200)
  } else if (vehicle instanceof Plane) {
    vehicle.fly(200)
  }
}
```

This code isn't polymorphic.  It treats different things differently.

How would you add a `Skateboard` class?

You might do this:

```js
function move200(vehicle) {
  if (vehicle instanceof Car) {
    vehicle.drive(200)
  } else if (vehicle instanceof Plane) {
    vehicle.fly(200)
  } else if (vehicle instanceof Skateboard) {
    vehicle.skate(200)
  }
}
```

But imagine if you refactored the `Car`, `Plane` and `Skateboard` to all have a `move` method.  You could rewrite `move200` as:

```js
function move200(vehicle) {
  vehicle.move(200)
}
```

The `Car`, `Plane` and `Skateboard` are now treated polymorphicly as just "vehicles".

### Duck typing

> Duck typing in computer programming is an application of the duck test—"If it walks like a duck and it quacks like a duck, then it must be a duck"—to determine whether an object can be used for a particular purpose. With nominative typing, an object is of a given type if it is declared to be (or if a type's association with the object is inferred through mechanisms such as object inheritance). In duck typing, an object is of a given type if it has all methods and properties required by that type.

How does the code above relate to duck typing?

### Simplicity

How is the polymorphic code simpler?

## Instructions

There's a project inside this directory.  It's a very simple test assertion library.  It lets you create a list of assertions and then check them.  For example:

```js
const equalAssertion = new Equal(1, 1)
const includeAssertion = new Include([1,2,3], 3)
const assertionList = new AssertionList([equalAssertion, includeAssertion])

assertionList.checkAll()
```

You job is to simplify the code by making it polymorphic.

There are tests to help you refactor the code.  To make the refactoring easier, the tests are currently focused on the `AssertionList`.  Depending on the changes you make, you may be able to leave these tests unchanged, or you may need to change them slightly.

If you need a hint, check the `hints.md` file.

### Run the tests

```sh
npx jasmine
```

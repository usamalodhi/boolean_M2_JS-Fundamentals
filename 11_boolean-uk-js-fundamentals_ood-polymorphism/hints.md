Look at the code in the `AssertionList` class. It goes through every assertion and has to check it's type (using `instances`) so it
knows what method to call. If the assertion object is an instance of the `Equal` class, it calls `checkEqual`. If it is an instance
of the `Include` class, it calls check include.

To make the code polymorhpic, change the names of these methods on `Equal` and `Include` so they have the same name. Once you do this,
can you then remove the `instanceof` checks in the `AssertionList` class? Do the tests pass?
# Overivew & Domain Model

This document provides rationale for my submission of TTD - Bob's Bagels

| Basket |
|+selectedItemsContainer: array |
|+itemInBasketCounter: number |
|+shoppingBasket: array |
| :-------------------- |
| +createBasketOfSize() |
| +selectItems() |
| +addItemToBasket() |
| +removeItemFromBasket() |
| +alertPriceOfItemBeforeBasket() |
| +alertBasketCapacityStatus() |
| +alertPriceOfBasket() |

## Constructor function of Basket Class

I wanted to design a system where the consumer (shopper) would first select items from an unlimited stock of items for consideration of putting into the basket. This was an attempt to model the behavior of standing in front of a shelf and mentally considering which items should be placed in the shopping basket. This explains the initialisation of the following as empty arrays in the constructor body

```JS
this.selectedItemsContainer = []
this.shoppingBasket = []
this.totalPricesOfItemsInBasket = []
```

## Body of Class - explained through class methods

```JS
createBasketOfSize(basketSize)
```

Dynamically create a basket of any size where udnefined represents an empty slot in the basket for an item to be inserted into

```JS
removeItemFromBasket(item)
```

This function searches for a product in the basket using the sku and replaces the index value of that item's position with undefined.

```JS
alertPriceOfItemBeforeBasket(item)/.
```

This is a standard for loop which returns the price of the product from the STOCK or shopping aisle that would run before the method for selection of items for consideration to put into basket e.g. selectItems(itemAtIndex)

```JS
 alertBasketCapacityStatus()
```

The above method alerts the user that the first n number of items which fit the capacity of the basket were added to the basket, whilst all other items were rejected. Additionally a successful message is returned to indicate when all items fit the basket with how much space is remaining for more items

```JS
 alertPriceOfBasket()
```

The above method applys two map functions where:
first map targets the price of each item
second map convert number presented as string into the number format
The reduce function distils price into a single value

# Improvements

Whilst the main focus of this exercise was to take a TTD approach to translate business requirements into software requirements, I should be considering how to implement principles of OOP and either the inheritence or composition model for scaleable and maintainable code which adhere to the SOLID principles (but not necessarily 100% as these are guidelines)

In my spare time, I should revisit the exercise to practice using the readline module to print out the receipts

# js-head
Get the first element in iterable collection

A common way of getting the first element in a collection which implements Iterable protocol.

## Installation

```
$ npm i js-head
```

## Usage

```javascript
import head from 'js-head';

head([1, 2, 3]); // 1
head(new Set([1, 2, 3])); // 1
head(Immutable.List([1, 2, 3])); // 1
```

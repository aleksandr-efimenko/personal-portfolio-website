---
title: "Comparison of objects and arrays in Javascript"
excerpt: "In this article, we will implement a custom object and array comparison function. We will use recursion to implement the comparison function."
coverImage: "/blog/compare-objects/cover.png"
date: "2023-12-29"
ogImage:
  url: "/blog/compare-objects/cover.png"
---

Deep equality check is a common problem in Javascript. Unlike the regular equality operator (== or ===), which only checks for shallow equality, deep equal traverses through the entire structure of the objects or arrays to validate their equality.
The problem with the regular equality operator is that it only checks references of the objects or arrays. If two objects or arrays have the same values but different references, they will not be considered equal.

### There are several common ways to compare objects and arrays in Javascript:

#### 1. [Lodash's isEqual](https://lodash.com/docs/4.17.15#isEqual)

This is the most popular way to compare objects and arrays in Javascript. It is a part of the Lodash library. It is a very well tested and optimized function. It is also very easy to use. The only downside is that it is a part of the Lodash library, which is a large library. If you are already using Lodash, then this is the best option.

To use it, you need to install the Lodash library using npm or yarn.

```bash
npm install lodash
```

Then you can import it in your code and use it.

```javascript
import isEqual from "lodash/isEqual";

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

isEqual(obj1, obj2); // true
```

#### 2. [Node.js assert.deepEqual() method](https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message)

This is a part of the Node.js assert module.

The main downside of this method is that it can only be used in Node.js but not in the browser.

Another issue is this function throws an error if the objects are not equal. This is not ideal if you want to use it in a conditional statement. You can use try/catch to handle the error, but it is not ideal.

```javascript
const assert = require("assert").strict;

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

const obj3 = { a: 1, b: 3 };

assert.deepEqual(obj1, obj2); // true

assert.deepEqual(obj1, obj3); // AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:
```

#### 3. [JSON.stringify() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

This is a built-in method in Javascript. It converts a Javascript object or array into a JSON string. The JSON string can be compared using the regular equality operator. This is the most used method to compare objects and arrays in Javascript.

But it has some downsides, the main issue with this method is that order of the keys in the object matters. If the order of the keys is different, the JSON string will be different even if the objects are equal. To handle this, you can sort the keys before comparing them.

Another problem is when one of the objects contains an undefined value. The JSON.stringify() method will convert the undefined value to null. This will cause the comparison to fail even if the objects are equal. To handle this, you can use a custom replacer function to convert undefined values to null.

One more limitation with JSON.stringify() is that it does not work if the object or array contains functions or circular references. For example, if the object contains a function, it will be converted to null. If the object contains a circular reference, it will throw an error.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

JSON.stringify(obj1) === JSON.stringify(obj2); // true

// Order of the keys matters
const obj3 = { b: 2, a: 1 };

JSON.stringify(obj1) === JSON.stringify(obj3); // false

// Undefined values are converted to null
const obj4 = { a: 1, b: undefined };
const obj5 = { a: 1 };

JSON.stringify(obj4) === JSON.stringify(obj5); // false
```

#### 4. [Custom object and array comparison function]()

Let's implement a custom object and array comparison function. We will use recursion to implement the comparison function.
We will use the following rules to compare objects and arrays:

- If the objects are strictly equal, return true
- If either object is null, they are not equal
- If the string representations of the objects are not equal, they are not equal
- If the objects are not of type 'object', compare them directly
- If either object is an array
  - If only one of the objects is an array, they are not equal
  - If the arrays have different lengths, they are not equal
  - Compare each element of the arrays
- If the objects have different numbers of keys, they are not equal
- Compare each key-value pair of the objects
  - If the key does not exist in the second object, they are not equal
  - If the values are not deeply equal, the objects are not equal
- If all checks passed, the objects are deeply equal

I wrote this function as an [Exercise "2628. JSON Deep Equal" from LeetCode](https://leetcode.com/problems/json-deep-equal/description/)

```javascript
/**
 * @param {null|boolean|number|string|Array|Object} o1
 * @param {null|boolean|number|string|Array|Object} o2
 * @return {boolean}
 */
function areDeeplyEqual(o1, o2) {
  // If the objects are strictly equal, return true
  if (o1 === o2) return true;
  // If either object is null, they are not equal
  if (o1 === null || o2 === null) return false;
  // If the string representations of the objects are not equal, they are not equal
  if (String(o1) !== String(o2)) return false;
  // If the objects are not of type 'object', compare them directly
  if (typeof o1 !== "object") {
    return o1 === o2;
  }

  // If either object is an array
  if (Array.isArray(o1) || Array.isArray(o2)) {
    // If only one of the objects is an array, they are not equal
    if (!Array.isArray(o1) || !Array.isArray(o2)) return false;
    // If the arrays have different lengths, they are not equal
    if (o1.length !== o2.length) return false;
    // Compare each element of the arrays
    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) return false;
    }
  }

  // If the objects have different numbers of keys, they are not equal
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  // Compare each key-value pair of the objects
  for (const [key, value] of Object.entries(o1)) {
    // If the key does not exist in the second object, they are not equal
    if (!(key in o2)) return false;
    // If the values are not deeply equal, the objects are not equal
    if (!areDeeplyEqual(value, o2[key])) return false;
  }

  // If all checks passed, the objects are deeply equal
  return true;
}
```

It was a good exercise to implement this function because it helped me understand how deep equality works in Javascript. I hope this article will help you understand it too.

---
title: "Let’s implement a Debounce function in Javascript"
excerpt: "Debounce function is used to limit the rate at which a function can fire. In this article, we will implement a custom debounce function. We will use closures and setTimeout to implement the debounce function.
"
coverImage: "/blog/debounce-function/cover.jpg"
date: "2023-11-12T05:35:07.322Z"
ogImage:
  url: "/blog/debounce-function/cover.jpg"
---

## Let's implement a Debounce function

A debounce function is used to limit the rate at which a function can fire.

Previously I used [Lodash's debounce function](https://lodash.com/docs/4.17.15#debounce), so I didn't know how it worked and decided to implement it myself. I thought it would be a good exercise and maybe help someone else come up with a better understanding of how it works.

Check how the debounce function works:

<iframe src="https://codesandbox.io/embed/vnnplw?view=preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Debounce function"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Real-life examples:

- Doing an API call on every keypress in an input. If the user types fast, we will fire a lot of API calls, which is not good. We can use debounce to limit the rate at which the API calls are made.

- A button click handled by a function that will only run once in a given time period such as the Save button. If the user clicks the button multiple times, we will only run the function once.

- When a user resizes a window or scrolls a page, which can trigger dozens or hundreds of calls in a small period of time.

Implementing a debounce function is not that hard. Two key concepts are used: closures and setTimeout.

```javascript
export function debounce(callback: () => void, interval: number) {
  let timeout: number | null = null;
  return function (...args: unknown[]) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), interval);
  };
}
```

Closure is a function that has access to the parent scope, even after the parent function has closed. In our case, the parent function is the debounce function and the child function is the function that will be called after the wait time has passed. The child function will have access to the parent function's scope, even after the parent function has closed.

SetTimeout is a function that will call a function after a given time has passed. SetTimeout returns a timer ID that can be used to cancel the timer by calling clearTimeout function. We will use this to reset the timer if the function is called again before the wait time has passed.

# Event Loop

The Event Loop is one of the most important concepts in JavaScript and Node.js.

It explains how JavaScript can handle asynchronous operations without blocking
the main JavaScript thread.

---

## What Is the Event Loop?

The Event Loop is a mechanism that allows JavaScript to perform asynchronous
work while keeping the main JavaScript execution thread available.

JavaScript executes code using a Call Stack.

When an asynchronous operation starts, JavaScript does not always wait for it.

Instead, the operation can be handled by the environment and its result is
processed later.

This is why Node.js can handle many I/O operations efficiently.

---

## Synchronous vs Asynchronous

### Synchronous

Synchronous code runs one operation after another.

```js
console.log("A");
console.log("B");
console.log("C");
```

Output:

```js
A
B
C
```
Each operation must finish before the next one starts.

### Asynchronous

Asynchronous operations can start work and allow JavaScript to continue.

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
```

Output:

```js
A
C
B
```

---

## Blocking vs Non-Blocking

### Blocking
Blocking code stops the current execution until the operation finishes.

```js
Start
   ↓
Slow operation
   ↓
Wait
   ↓
Continue
```
While waiting, other JavaScript work cannot run on the same thread.

### Non-Blocking
Non-blocking code starts an operation and continues execution.

```js
Start
  ↓
Start async operation ──────┐
  ↓                         │
Continue JavaScript         │
  ↓                         │
Continue JavaScript         │
                            ↓
                       Operation done
                            ↓
                       Handle result
```

---

## I/O
I/O means Input/Output.

Examples include:

- Reading files
- Writing files
- Network requests
- Database queries
- HTTP requests
- DNS operations
- Communicating with external services

I/O operations are usually much slower than normal JavaScript calculations.

---

## Non-Blocking I/O

Node.js is designed to handle I/O asynchronously.

Example:

```js
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("Done");
```

The program can print:

```js
Done
```
before the file is completely read.

The important idea is:
Start the I/O operation and continue doing other work.

---

## Single Thread
JavaScript code in Node.js normally runs on a main JavaScript thread.

This means JavaScript executes one piece of JavaScript at a time.
However, single-threaded does not mean Node.js can only handle one operation.
Node.js uses the Event Loop, operating-system facilities, and libuv to manage
many asynchronous operations.

For example:

```js
JavaScript Thread
       |
       v
   Event Loop
   /    |    \
 File  HTTP  Database
```
The main thread does not need to sit idle while I/O is happening.

---

## Call Stack
The Call Stack keeps track of JavaScript function execution.

Example:

```js
function first() {
  second();
}

function second() {
  console.log("Hello");
}

first();
```

The stack looks approximately like:

```js
first()
second()
console.log()
```
Functions are removed from the stack when they finish.
The Event Loop can only execute JavaScript when the Call Stack is available.

---

## Callback Queue
When an asynchronous operation finishes, its callback may be placed into a queue.
The Event Loop checks whether the Call Stack is empty.
If it is empty, a callback can be moved to the Call Stack.

Async operation
      ↓
Operation finishes
      ↓
Callback Queue
      ↓
Event Loop
      ↓
Call Stack

---

## setTimeout
setTimeout schedules a callback to run after at least the specified delay.

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

Output:

```js
A
C
B
```

setTimeout(..., 0) does not mean "run immediately."
It means the callback becomes eligible to run after the timer condition is met
and the Event Loop gets an opportunity to execute it.

---

## Promises and Microtasks
Promises use a microtask queue.

```js
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");
```

Output:

```js
A
C
B
```
Microtasks generally have priority over regular timer callbacks once the current
JavaScript operation finishes.

Example:

```js
setTimeout(() => console.log("Timer"), 0);

Promise.resolve().then(() => console.log("Promise"));
```

Typical output:

```js
Promise
Timer
async/await
```
async/await provides a cleaner way to work with Promises.

```js
async function getData() {
  const result = await fetchData();
  console.log(result);
}
```

await does not block the entire Node.js process.
It pauses the async function until the Promise settles while allowing other
work to continue.

---

## libuv
libuv is a library used by Node.js to provide asynchronous I/O and the
Event Loop infrastructure.

It helps Node.js work with:

- Event Loop
- Timers
- Networking
- File-system operations
- DNS operations
- Thread Pool

A simplified architecture is:

```js
JavaScript
    ↓
Node.js APIs
    ↓
  libuv
   /  \
OS     Thread Pool
```

---

## Thread Pool
Some operations cannot be handled directly by the operating system in the
same asynchronous way as network sockets.

libuv provides a worker thread pool for certain operations.

Examples can include:

- Some file-system operations
- Some DNS operations
- CPU-related library operations such as certain crypto functions

The JavaScript code still runs on the main JavaScript thread.

---

## Event Loop vs Thread Pool
These are different concepts.

### Event Loop
The Event Loop coordinates asynchronous callbacks and JavaScript execution.

### Thread Pool
The Thread Pool provides worker threads for certain operations.

```js
             Node.js
                |
        +-------+-------+
        |               |
   Event Loop       Thread Pool
        |               |
   JavaScript       Worker Threads
```

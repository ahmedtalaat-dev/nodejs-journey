# JavaScript Promises & Async/Await

A practical guide to understanding asynchronous JavaScript, Promises, `async/await`, error handling, and `Promise.all()`.

---

## 1. Synchronous vs Asynchronous JavaScript
JavaScript normally executes code from top to bottom.

For example:

```js
console.log("Start");
console.log("Middle");
console.log("End");
```

Output:

```js
Start
Middle
End
```

This is synchronous code.
Each line runs before the next line.

Asynchronous JavaScript

Some operations take time to finish.

Examples include:

- Fetching data from an API
- Reading files
- Waiting for a timer
- Database operations
- Sending network requests

JavaScript does not want to freeze the entire application while waiting.

Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Data received");
}, 2000);

console.log("End");
```

Output:

```js
Start
End
Data received
```

The timer takes two seconds, but JavaScript continues executing the rest of the code.

---

## 2. What Is a Promise?

A Promise is an object that represents the eventual result of an asynchronous operation.

Think of a Promise as:

"I don't have the result right now, but I promise to give you the result later."

A Promise can eventually:

Succeed
Fail

Example:

```js
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
});
```

---

## 3. Promise States

A Promise has three possible states:

          pending
         /       \
        /         \
 fulfilled       rejected

---

## 4. Creating a Promise

We can create our own Promise using the Promise constructor:

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});
```

There are two important functions:

```js
resolve()
```
Used when the operation succeeds:

```js
resolve("Success!");
```

```js
reject()
```
Used when the operation fails:

```js
reject("Something went wrong!");
```

Example with a Timer
```js
function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Finished waiting!");
    }, 2000);
  });
}
```

The function returns a Promise.
After two seconds, the Promise is fulfilled.

---

## 5. Using .then() and .catch()

We can handle the result of a Promise using .then().

```js
wait().then((result) => {
  console.log(result);
});
```

Output after two seconds:

```js
Finished waiting!
Handling Errors with .catch()
```

If the Promise is rejected, we can use .catch():

```js
const promise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

Output:

```js
Something went wrong!
Basic Promise Pattern
```

```js
somePromise()
  .then((result) => {
    // Handle success
  })
  .catch((error) => {
    // Handle error
  });
```

Think of it as:

Promise
   |
   +---- Success ---> .then()
   |
   +---- Failure ---> .catch()

   ---
   
## 6. Promise Chaining
One Promise can depend on another Promise.

For example:

```js
getUser()
  .then((user) => {
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.log(error);
  });
```

The process is:

getUser()
    |
    v
  user
    |
    v
getPosts(user.id)
    |
    v
  posts
    |
    v
 console.log()

Each .then() receives the result returned by the previous operation.

Why return Matters

Consider:

```js
getUser()
  .then((user) => {
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log(posts);
  });
```
The return passes the Promise returned by getPosts() to the next .then().

Without returning it:

```js
getUser()
  .then((user) => {
    getPosts(user.id);
  })
  .then((posts) => {
    console.log(posts);
  });
```
The second .then() will not receive the posts correctly.

---

## 7. Fetch API and Promises

The fetch() API is commonly used to make HTTP requests.

fetch() returns a Promise.

Example:
```js
fetch("https://api.example.com/users")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

Getting JSON Data
Usually, we want to convert the response into JSON:

```js
fetch("https://api.example.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  });
```

There are two asynchronous operations here:

fetch()
   |
   v
response
   |
   v
response.json()
   |
   v
users

Both fetch() and response.json() return Promises.

---

## 8. What Is async?

The async keyword is used to define an asynchronous function.

Example:

```js
async function hello() {
  return "Hello!";
}
```

An important rule:
An async function always returns a Promise.
Even though we return a normal string:

```js
return "Hello!";
```
the function actually returns a Promise.
Therefore, we can use .then():

```js
hello().then((message) => {
  console.log(message);
});
```

Output:

```js
Hello!
```

---

## 9. What Is await?
The await keyword waits for a Promise and gives us its resolved value.

Example:
```js
function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Finished!");
    }, 2000);
  });
}

async function test() {
  const result = await wait();

  console.log(result);
}

test();
```

Output after two seconds:

```js
Finished!
```

Without await:

```js
const result = wait();
console.log(result);
```
result contains a Promise.

With await:

```js
const result = await wait();
console.log(result);
```
result contains the resolved value.

---

## 10. Error Handling with try/catch
When using async/await, we commonly handle errors with try/catch.

Example:

```js
async function getData() {
  try {
    const response = await fetch(
      "https://api.example.com/data"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

The structure is:

```js
try {
  // Code that might fail
} catch (error) {
  // Handle the error
}
```

---

## 11. Converting .then() to async/await
Consider this Promise-based code:

```js
getUser()
  .then((user) => {
    return getPosts(user.id);
  })
  .then((posts) => {
    return getComments(posts[0].id);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => {
    console.log(error);
  });
```

We can rewrite it using async/await:

```js
async function main() {
  try {
    const user = await getUser();

    const posts = await getPosts(user.id);

    const comments = await getComments(posts[0].id);

    console.log(comments);
  } catch (error) {
    console.log(error);
  }
}

main();
```
The second version is easier to read because it looks similar to normal synchronous code.

---

## 12. Does await Block JavaScript?
No.
This is a very important concept.
await pauses the execution of the current async function, not the entire JavaScript program.

Example:

```js
async function test() {
  console.log("A");

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  console.log("B");
}

test();

console.log("C");
```

Output:

```js
A
C
B
```

Why?

test()
  |
  +-- prints A
  |
  +-- waits
       |
       +-- JavaScript continues
              |
              +-- prints C

After 2 seconds:

  +-- prints B

The entire program does not freeze.

---

## 13. Sequential vs Parallel Operations
This is one of the most important concepts when working with asynchronous JavaScript.

Suppose we have two independent operations:

```js
getUsers();
getPosts();
```
Neither depends on the other.
We can run them concurrently.

But this code:

```js
const users = await getUsers();
const posts = await getPosts();
```
waits for the first operation before continuing to the second.

The flow is:

getUsers()
    |
    | wait
    v
users
    |
    v
getPosts()
    |
    | wait
    v
posts

Sometimes this is necessary.

But sometimes it is unnecessarily slow.

---

## 14. Promise.all()
Promise.all() allows us to wait for multiple Promises together.

Example:

```js
const usersPromise = getUsers();
const postsPromise = getPosts();

const [users, posts] = await Promise.all([
  usersPromise,
  postsPromise
]);
```
The operations can run concurrently:

getUsers()  ---------------->
                            |
                            v
                         Promise.all()
                            |
                            v
                         results

getPosts()  ---------------->
A Simpler Example

```js
async function loadData() {
  const [users, posts] = await Promise.all([
    getUsers(),
    getPosts()
  ]);

  console.log(users);
  console.log(posts);
}
```

This is often better than:

```js
async function loadData() {
  const users = await getUsers();
  const posts = await getPosts();

  console.log(users);
  console.log(posts);
}
```
when getUsers() and getPosts() do not depend on each other.

Promise.all() and Errors

If one Promise rejects, Promise.all() rejects.

Example:

```
async function loadData() {
  try {
    const [users, posts] = await Promise.all([
      getUsers(),
      getPosts()
    ]);

    console.log(users);
    console.log(posts);
  } catch (error) {
    console.log("Something failed:", error);
  }
}
```
If either operation fails, the catch block runs.

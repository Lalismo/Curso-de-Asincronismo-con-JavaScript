const fnAsyng = () => {
    return new Promise((resolve, reject) => {
        (true) // In this case, setTimeout will always execute, but this could be a real condition determining whether the promise is resolved or rejected.
        ? setTimeout(() => resolve('Async!!'), 2000) // The promise is resolved after 2 seconds.
        : reject(new Error('Error!')) // This will never execute in this example, but it's the rejection part of the promise.
    });
}

// The following function is declared as async, meaning it returns a promise.
const anotherFn = async() => {
    // The await keyword pauses the execution of the function until the promise is resolved or rejected.
    // Here it waits for the fnAsyng() promise to resolve, and the result is stored in the variable something.
    const something = await fnAsyng();
    // Once the promise resolves, execution resumes, and the resolved value of the promise is logged.
    console.log(something); // Prints 'Async!!' after 2 seconds.
    console.log('Hello!'); // Prints 'Hello!' after 'Async!!' because await ensures execution waits for fnAsyng() to resolve.
}

console.log('Before');
anotherFn(); // Call to the anotherFn() function, which prints 'Async!!' and 'Hello!' after 2 seconds.
console.log('After'); // Prints 'After' before anotherFn() finishes its execution, as the console.log() calls are not inside the async function.

// console.log("Timer started");

// setTimeout(() => {
//     console.log("Timer finished");
// },3000);

// // setInterval(()=>{
// //     console.log("Interval running");
// // },1000);

// console.log("timer end")


// let counter = 0;
// const intervalId = setInterval(() => {
//     console.log("Counter: ", counter);
//     counter++;
//     if(counter >= 5) {
//         clearInterval(intervalId);
//         console.log("Interval cleared");
//     }
// }, 1000);


// Promises and async/await
// let myPromises = new Promise((resolve, reject) => {
//     let success = true; // Simulating a successful operation
//     if(success) {
//         resolve("Promise resolved successfully!");
//     } else {
//         reject("Promise rejected!");
//     }
// });

// myPromises.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.error(error);
// }).finally(()=>{
//     console.log("Promise handling completed.");
// });

// async / await
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log("Fetched data: ", data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    } finally {
        console.log("Fetch operation completed.");
    }
}

fetchData();
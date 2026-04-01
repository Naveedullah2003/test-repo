// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => {
//   // Handle the fetched data
//   console.log(data);
// })
// .catch(error => {
//   // Handle any errors
//   console.error('Error:', error);
// });

// post fetch api
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'My Post',
//         body: 'This is the content of my post.',
//         userId: 1
//     })
// })
// .then(response => response.json())
// .then(data => {
//     // Handle the created post
//     console.log(data);
// })
// .catch(error => {
//     // Handle any errors
//     console.error('Error:', error);
// });

// error handling with fetch
fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
 .then(response => {
     if (!response.ok) {
         throw new Error('Network response was not ok ' + response.statusText);
     }
        return response.json();
    })
    .then(data => {
        // Handle the fetched data
        console.log(data);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });
    
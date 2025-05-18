// console.log("Hello!");

// setTimeout(() => {
//     console.log("setTimeout executed");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise executed");
// })

// console.log("End!");

// const outerFn=()=>{
//     let a = 10;
//     return () => {
//         console.log(a);
//     }
// }

// const fn = outerFn();
// fn();

// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Data Fetched!"), 2000);
// });

// fetchData.then(res => console.log(res))
//     .catch(error => console.error(error));

// const fetchData = async () => {
//     try {
//         const res = await new Promise((resolve, reject) => setTimeout(() => resolve("Data Fetched"), 2000));
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchData();

// const fetchUser = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve({ id: 1, name: "Vijay" }), 2000);
//     })
// }

// const getPost = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve({ postName: "New Post" }), 2000);
//     })
// }

// fetchUser().then((data) => {
//     console.log(data.name);
//     return getPost();
// })
//     .then((data) => console.log(data.postName));


// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("data fetched"), 3000);
//     })
// }

// fetchData().then((data) => console.log(data));
// console.log("hello");


const fetchData = async () => {
    const res = await new Promise((resolve, reject) => setTimeout(() => resolve("data fetched"), 3000));
    console.log(res);
}

fetchData();
console.log("Hello");
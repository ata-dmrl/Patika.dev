// setTimeout(()=>{
//     console.log("Hello World");
// },2000);//burda 2000ms saniye sonra kod çalışması söyleniyor.
// 
// import { user } from "./my_modele";

// setInterval(()=>{
//     console.log("Hello World");
// },2000);//burda 2000ms saniye aralıklarla kod çalışması söyleniyor.

// const sayHi=(cb)=>{
//     cb();
// }
// sayHi(() => {
//     console.log("Hello World");
// });

// import fetch from "node-fetch";
// // fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
// //      data.json())// burda bir json parse etme oldu
// // .then(users => console.log(users)) // sonra parse edilen datayı konsola yazdırır.
// async function GetData(){
//     const user = (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    
//     const pos1 = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
//     console.log("user:",user);
//     console.log("post:",pos1);
// }//fetch bir işelemi sırası ile yapmak için kullanılır
//await ise fetch işlemi bitene kadar bekler ve sonra diğer işlemi yapar.
// GetData();

// async () =>{
//     const {data : user}= await axios("https://jsonplaceholder.typicode.com/users");
    
//     const {data : post}= await axios("https://jsonplaceholder.typicode.com/posts?userId=1");

//     console.log("user:",user);
//     console.log("post:",post);
// }

// const getComments = (number) => {
    //     return new Promise((resolve,reject)=>{
//         // console.log("comments")
//         // resolve();

//         resolve("comments");
//         //resove başarılı bir şekilde sistem çalışırsa çalışır, reject ise hata oluşursa çalışır. 

//         if(number ===1)
//             resolve({text:"Selam"});

//         reject("bir problem oluştu")
//     });
// };
// getComments().then((data)=> console.log(data)).catch((a) => console.log(a));
// //then işlemi başarılı olursa çalışır, catch ise hata oluşursa çalışır.
import axios from "axios";

const getUsers = () => {
    return new Promise(async (resolve,reject) => {
        const {data} =  await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);

        reject("bir problem oluştu")
    });
};

// getUsers().then((data) => console.log(data)).catch((a)=> console.log(a));

const getPost = (post_id) => {
    return new Promise(async (resolve,reject) => {
        const {data} =  await axios(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
        resolve(data);

        reject("bir problem oluştu")
    });
};

// getPost(1).then((data) => console.log(data)).catch((a)=> console.log(a));
// bu şekilde verileri kafasına göre gelir ve hangisinin ilk geliceği belirsizdir bunun yerine yeni bir funtion yaparak sıraya koyabilirz

// (async() => {
//      await getUsers().then((data) => console.log(data)).catch((a)=> console.log(a));
//      await getPost(1).then((data) => console.log(data)).catch((a)=> console.log(a));
// })();
// bu şekilde ise bir funtion isimmi vermeden ve komut vermeeden kendi sırası gelince çalışan bir fonksiyon yazdık
// ve sıralı bir şekilde gelmsi sağlandı
// (async () => {
//     const users = await getUsers();

//     const post = await getPost(1);

//     console.log(users);
//     console.log(post);
// })(); // buda yukardakinin daha sade yazılmış hali,

// (async () => {
//     try {
//     const users = await getUsers();
//     const post = await getPost(1);

//     console.log(users);
//     console.log(post);
//     } catch (error) {
//         console.log(error);
//     }
// })();

Promise.all([getUsers(),getPost(1)]).then((data) => console.log(data)).catch((a)=> console.log(a));
// buda ise herşeyi tekseferde çalıştıdık yani post ve user ayrı ayrı çalıştırmak yerine hepsi ir ayarad çalıştırdı

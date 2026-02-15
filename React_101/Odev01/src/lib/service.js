import axios from "axios";

async function getData(number){
    return new Promise(async (resolve,reject) => {
    const {data: user} =  await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
    const {data: posts} =  await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);
    
    resolve({user,posts});

    reject("veriler bulunamadı");
});
}

export default getData;
